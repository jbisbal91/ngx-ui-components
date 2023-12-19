import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngx-card-image]',
})
export class CardImageDirective implements OnInit {
  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit() {
    this.setStyle();
  }
  setStyle() {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'position',
      'relative'
    );
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'box-sizing',
      'border-box'
    );

    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-repeat',
      'no-repeat'
    );
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-position',
      'center'
    );
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-size',
      'cover'
    );
  }
}
