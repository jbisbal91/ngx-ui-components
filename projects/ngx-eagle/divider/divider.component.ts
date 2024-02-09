import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { NgxOrientation } from './typings';

@Component({
  selector: 'ngx-divider',
  template: `
    <ng-container>
      <span *ngIf="ngxText">{{ ngxText }}</span>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  host: {
    class: 'ngx-divider',
    '[class.ngx-divider-orientation-left]': `ngxOrientation === 'left'`,
    '[class.ngx-divider-orientation-center]': `ngxOrientation === 'center'`,
    '[class.ngx-divider-orientation-right]': `ngxOrientation === 'right'`,
  },
  imports: [NgIf],
})
export class DividerComponent implements AfterViewInit {
  @Input() ngxText: string = '';
  @Input() ngxColor: string = '#6b727c';
  @Input() ngxDashed: boolean = false;
  @Input() ngxOrientation: NgxOrientation = 'center';

  constructor(
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.ngxDashed = elementRef.nativeElement.hasAttribute('ngxDashed');
  }

  ngAfterViewInit(): void {
    if (this.elementRef) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'border-top-color',
        this.ngxColor
      );
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'color',
        this.ngxColor
      );
    }
    this.cdr.markForCheck();
  }
}
