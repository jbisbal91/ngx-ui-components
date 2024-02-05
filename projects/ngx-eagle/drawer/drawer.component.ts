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
  template: ` <div *ngIf="ngxVisible" class="ngx-drawer-backdrop">
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
  @Input() ngxPlacement: NgxDrawerPlacement = 'bottom';

  @Output() readonly ngxOnClose = new EventEmitter<void>();

  @ViewChild('drawer') drawerRef!: ElementRef;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxVisible']) {
      this.openDrawer();
    }
  }

  openDrawer() {
    setTimeout(() => {
      if (this.drawerRef) {
        if (this.ngxPlacement === 'top' || this.ngxPlacement === 'bottom') {
          this.drawerRef.nativeElement.style.transform = 'translateY(0px)';
        }

        if (this.ngxPlacement === 'right' || this.ngxPlacement === 'left') {
          this.drawerRef.nativeElement.style.transform = 'translateX(0px)';
        }
      }
    });
  }
}
