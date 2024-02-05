import { NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgxDrawerPlacement } from './typings';

@Component({
  selector: 'ngx-drawer',
  template: ` <div
    #backdrop
    (click)="closeDrawer($event)"
    *ngIf="ngxVisible"
    class="ngx-drawer-backdrop"
  >
    <div
      #drawer
      class="ngx-drawer"
      [class.ngx-drawer-placement-top]="ngxPlacement === 'top'"
      [class.ngx-drawer-placement-right]="ngxPlacement === 'right'"
      [class.ngx-drawer-placement-bottom]="ngxPlacement === 'bottom'"
      [class.ngx-drawer-placement-left]="ngxPlacement === 'left'"
    >
      <ng-content></ng-content>
    </div>
  </div>`,
  standalone: true,
  imports: [NgIf],
})
export class DrawerComponent implements OnInit, OnChanges {
  @Input() ngxVisible: boolean = false;
  @Input() ngxPlacement: NgxDrawerPlacement = 'left';

  @Output() readonly ngxOnClose = new EventEmitter<void>();

  @ViewChild('backdrop') backdropRef!: ElementRef;
  @ViewChild('drawer') drawerRef!: ElementRef;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxVisible']) {
      this.openDrawer();
    }
  }

  openDrawer() {
    setTimeout(() => {
      if (
        this.drawerRef &&
        (this.ngxPlacement === 'top' ||
          this.ngxPlacement === 'bottom' ||
          this.ngxPlacement === 'right' ||
          this.ngxPlacement === 'left')
      ) {
        const axis =
          this.ngxPlacement === 'top' || this.ngxPlacement === 'bottom'
            ? 'Y'
            : 'X';
        this.drawerRef.nativeElement.style.transform = `translate${axis}(0px)`;
      }
    });
  }

  closeDrawer(event: Event) {
    const clickedElement = event.target as HTMLElement;
    const isClickOnParent = clickedElement === this.backdropRef.nativeElement;
    const isClickOnChild =
      this.drawerRef.nativeElement.contains(clickedElement);

    if (isClickOnParent && !isClickOnChild) {
      const transformMap = {
        bottom: 'translateY(100%)',
        top: 'translateY(-100%)',
        right: 'translateX(100%)',
        left: 'translateX(-100%)',
      };

      this.drawerRef.nativeElement.style.transform =
        transformMap[this.ngxPlacement];

      setTimeout(() => {
        this.ngxOnClose.emit();
      }, 500);
    }
  }
}
