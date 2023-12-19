import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngx-button]'
})
export class NgxButtonDirective implements OnInit {

  @Input() ngxType: 'primary' | 'default' | 'dashed' | 'text' | 'link' = 'default';
  disabled:boolean = false;
  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.setStyle();
  }

  setStyle() {
    this.disabled = this.elementRef.nativeElement.disabled;
    if (this.disabled) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'opacity', '0.65');
    }
    this.renderer2.setStyle(this.elementRef.nativeElement, 'padding', '8px 16px');
    this.renderer2.setStyle(this.elementRef.nativeElement, 'font-size', '14px');
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border-radius', '4px');
    this.renderer2.setStyle(this.elementRef.nativeElement, 'cursor', this.disabled ? 'no-drop' : 'pointer');
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border', '1px solid');

    switch (this.ngxType) {
      case 'primary': {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', this.disabled ? '#DCDCDC' : '#1890FF');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'color', '#FFFFFF');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'border', 'none');
        this.hover(this.disabled);
        break;
      }
      case 'default': {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.hover(this.disabled);
        break;
      }
      case 'dashed': {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'border', '1px dashed');
        this.hover(this.disabled);
        break;
      }
      case 'text': {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'border', 'none');
        break;
      }
      case 'link': {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'color', '#1890FF');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'border', 'none');
        break;
      }
    }
  }

  hover(disabled: boolean) {
    if (disabled) { return; }
    this.renderer2.listen(this.elementRef.nativeElement, 'mouseenter', () => {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'box-shadow', '0 4px 8px rgba(0, 0, 0, 0.1)');
    });
    this.renderer2.listen(this.elementRef.nativeElement, 'mouseleave', () => {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'box-shadow', '');
    });
  }

}