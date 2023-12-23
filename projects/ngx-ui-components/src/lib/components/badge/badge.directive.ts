import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  booleanAttribute,
} from '@angular/core';

@Directive({
  selector: '[ngxBadge]',
  host: {
    class: 'ngx-badge',
  }
})
export class BadgeDirective implements OnInit, OnChanges {
  @Input() ngxBadge: any;
  @Input() ngxBadgePosition: 'before' | 'after' = 'after';
  @Input() ngxBadgeSize: 'small' | 'medium' | 'large' = 'small';
  @Input()
  ngxBadgeHidden: boolean = false;

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
