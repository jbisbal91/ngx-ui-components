import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngx-card-avatar]',
})
export class CardAvatarDirective implements OnInit {
  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit() {
    this.setStyle();
  }
  setStyle() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'height', '2.5rem');
    this.renderer2.setStyle(this.elementRef.nativeElement, 'width', '2.5rem');
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'border-radius',
      '50%'
    );
  }
}
