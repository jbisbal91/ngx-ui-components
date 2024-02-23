import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { ColorContrast } from 'ngx-eagle/core/types';
import { NgxPosition, NgxSize } from './typings';

@Directive({
  selector: '[ngxBadge]',
  host: {
    class: 'ngx-badge',
  },
  standalone: true,
})
export class BadgeDirective implements OnInit, OnChanges {
  @Input() ngxBadge: any;
  @Input() ngxOverflowCount: number = 99;
  @Input() ngxBadgePosition: NgxPosition = 'after';
  @Input() ngxBadgeSize: NgxSize = 'small';
  @Input() ngxBadgeHidden: boolean = false;
  @Input() ngxColor!: ColorContrast | string;

  newSpan = document.createElement('span');

  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxBadgeHidden']?.currentValue) {
      this.renderer2.addClass(this.newSpan, 'ngx-badge-hidden');
    } else {
      this.renderer2.removeClass(this.newSpan, 'ngx-badge-hidden');
    }
  }

  ngOnInit(): void {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'width', 'fit-content');
    this.newSpan.textContent = this.ngxBadge;
    this.renderer2.addClass(this.newSpan, 'ngx-badge-content');
    if (this.elementRef.nativeElement.tagName.toLowerCase() === 'button') {
      this.renderer2.addClass(this.newSpan, 'ngx-badge-btn');
    }

    if (this.ngxBadgePosition == 'before') {
      this.renderer2.addClass(this.newSpan, 'ngx-badge-before');
    }

    this.renderer2.addClass(this.newSpan, `ngx-badge-${this.ngxBadgeSize}`);
    this.renderer2.appendChild(this.elementRef.nativeElement, this.newSpan);
  }
}
