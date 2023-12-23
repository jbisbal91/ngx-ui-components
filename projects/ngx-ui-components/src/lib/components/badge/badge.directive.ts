import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxBadge]',
  host: {
    class: 'ngx-badge',
  },
  standalone: true,
})
export class BadgeDirective implements OnInit {
  @Input() ngxBadge: any;
  @Input() ngxBadgePosition: 'before' | 'after' = 'after';

  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    const newSpan = document.createElement('span');
    newSpan.textContent = this.ngxBadge;
    this.renderer2.addClass(newSpan, 'ngx-badge-content');
    switch (this.elementRef.nativeElement.tagName.toLowerCase()) {
      case 'button': {
        console.log('button');
        this.renderer2.addClass(newSpan, 'ngx-badge-btn');

        break;
      }
      case 'div': {
        console.log('div');
        break;
      }
    }

    if (this.ngxBadgePosition == 'before') {
      this.renderer2.addClass(newSpan, 'ngx-badge-before');
    }

    this.renderer2.appendChild(this.elementRef.nativeElement, newSpan);
  }
}
