import { NgIf } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import { NgxDrawerPlacement } from './typings';

@Component({
  selector: 'ngx-drawer',
  template: ` <div
    #backdrop
    (click)="closeDrawer($event)"
    *ngIf="internalVisible"
    class="ngx-backdrop"
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
export class DrawerComponent implements AfterViewChecked {
  @Input({ transform: booleanAttribute }) ngxBackdrop: boolean = true;
  @Input({ transform: booleanAttribute }) ngxBackdropClosable: boolean = true;
  @Input() ngxPlacement: NgxDrawerPlacement = 'left';

  internalVisible: boolean = false;

  @Input()
  get ngxVisible(): boolean {
    return this.internalVisible;
  }

  set ngxVisible(val: boolean) {
    if (this.internalVisible !== val) {
      this.internalVisible = val;
      if (val) {
        this.openDrawer();
      }
      this.ngxVisibleChange.emit(val);
    }
  }

  @Output() ngxVisibleChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  @ViewChild('backdrop') backdropRef!: ElementRef;
  @ViewChild('drawer') drawerRef!: ElementRef;

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private renderer: Renderer2) {}

  ngAfterViewChecked(): void {
    this.setBgBackdrop();
  }

  setBgBackdrop() {
    if (this.backdropRef) {
      const bgBackdrop = this.ngxBackdrop
        ? 'rgba(0, 0, 0, 0.65)'
        : 'transparent';
      this.renderer.setStyle(
        this.backdropRef.nativeElement,
        'background-color',
        bgBackdrop
      );
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
        this.renderer.setStyle(
          this.drawerRef.nativeElement,
          'transform',
          `translate${axis}(0px)`
        );
      }
    });
  }

  closeDrawer(event: Event) {
    const clickedElement = event.target as HTMLElement;
    const isClickOnParent = clickedElement === this.backdropRef.nativeElement;
    const isClickOnChild =
      this.drawerRef.nativeElement.contains(clickedElement);
    if (isClickOnParent && !isClickOnChild && this.ngxBackdropClosable) {
      this.closingAction();
    }
  }

  closingAction() {
    if (this.drawerRef) {
      const transformMap = {
        bottom: 'translateY(100%)',
        top: 'translateY(-100%)',
        right: 'translateX(100%)',
        left: 'translateX(-100%)',
      };
      this.renderer.setStyle(
        this.drawerRef.nativeElement,
        'transform',
        transformMap[this.ngxPlacement]
      );
      setTimeout(() => {
        this.ngxVisibleChange.emit(false);
      }, 500);
    }
  }
}
