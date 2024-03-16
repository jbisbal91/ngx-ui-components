import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  isDevMode,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

import { InternalDialogRef } from './dialog-ref';
import { DialogService } from './dialog.service';
import { coerceCssPixelValue } from './dialog.utils';
import { DialogDraggableDirective, DragOffset } from './draggable.directive';
import { NODES_TO_INSERT } from './providers';

@Component({
  selector: 'ngx-dialog',
  standalone: true,
  imports: [DialogDraggableDirective, CommonModule],
  template: `
    <div
      #backdrop
      class="ngx-dialog-backdrop"
      [hidden]="!config.backdrop"
      [class.ngx-dialog-backdrop-visible]="config.backdrop"
    >
      <div
        #dialog
        class="ngx-dialog-content"
        [class.ngx-dialog-resizable]="config.resizable"
        [ngStyle]="styles"
        role="dialog"
      ></div>
    </div>
  `,
  styleUrls: [`./dialog.component.scss`],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements OnInit, OnDestroy {
  dialogRef = inject(InternalDialogRef);
  config = this.dialogRef.config;

  private size = this.config.sizes?.[this.config.size || 'md'];
  styles = {
    width: coerceCssPixelValue(this.config.width || this.size?.width),
    minWidth: coerceCssPixelValue(this.config.minWidth || this.size?.minWidth),
    maxWidth: coerceCssPixelValue(this.config.maxWidth || this.size?.maxWidth),
    height: coerceCssPixelValue(this.config.height || this.size?.height),
    minHeight: coerceCssPixelValue(
      this.config.minHeight || this.size?.minHeight
    ),
    maxHeight: coerceCssPixelValue(
      this.config.maxHeight || this.size?.maxHeight
    ),
  };

  @ViewChild('backdrop', { static: true })
  private backdrop!: ElementRef<HTMLDivElement>;

  @ViewChild('dialog', { static: true })
  private dialogElement!: ElementRef<HTMLElement>;

  @ViewChild(DialogDraggableDirective, { static: false })
  private draggable!: DialogDraggableDirective;

  private destroy$ = new Subject<void>();

  private nodes = inject(NODES_TO_INSERT);

  private document = inject(DOCUMENT);
  private host: HTMLElement = inject(ElementRef).nativeElement;

  private dialogService = inject(DialogService);

  constructor() {
    this.nodes.forEach((node) => this.host.appendChild(node));
    if (this.config.windowClass) {
      const classNames = this.config.windowClass.split(/\s/).filter((x) => x);
      classNames.forEach((name) => this.host.classList.add(name));
    }

    if (!this.config.id) {
      const id = `dialog-${crypto.randomUUID()}`;
      this.config.id = id;
      this.dialogRef.updateConfig({ id });
      if (isDevMode()) {
        console.warn(
          `[@ngx/dialog]: Dialog id is not provided, generated id is ${id}, providing an id is recommended to prevent unexpected multiple behavior`
        );
      }
    }
    this.host.id = this.config.id;
  }

  ngOnInit() {
    const backdrop = this.config.backdrop
      ? this.backdrop.nativeElement
      : this.document.body;
    const dialogElement = this.dialogElement.nativeElement;

    const backdropClick$ = fromEvent<MouseEvent>(backdrop, 'click', {
      capture: true,
    }).pipe(filter(({ target }) => !dialogElement.contains(target as Element)));
    const closeConfig =
      typeof this.config.enableClose === 'boolean' ||
      this.config.enableClose === 'onlyLastStrategy'
        ? {
            escape: this.config.enableClose,
            backdrop: this.config.enableClose,
          }
        : this.config.enableClose;
    merge(
      fromEvent<KeyboardEvent>(this.document.body, 'keyup').pipe(
        filter(({ key }) => key === 'Escape'),
        map(() => closeConfig.escape)
      ),
      backdropClick$.pipe(map(() => closeConfig.backdrop))
    )
      .pipe(
        takeUntil(this.destroy$),
        filter((strategy) => {
          if (!strategy) return false;
          if (strategy === 'onlyLastStrategy') {
            return this.dialogService.isLastOpened(this.config.id);
          }
          return true;
        })
      )
      .subscribe(() => this.closeDialog());
    this.nodes.forEach((node) => dialogElement.appendChild(node));
    if (this.config.zIndexGetter) {
      const zIndex = this.config.zIndexGetter().toString();
      backdrop.style.setProperty('--dialog-backdrop-z-index', zIndex);
    }
  }

  reset(offset?: DragOffset): void {
    if (this.config.draggable) {
      this.draggable.reset(offset);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
