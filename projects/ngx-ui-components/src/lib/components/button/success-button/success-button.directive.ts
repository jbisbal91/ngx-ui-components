import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgxButtonDirective } from '../ngx-button/ngx-button.directive';

@Directive({
  selector: '[ngxSuccess]',
  host: {
    class: 'ngx-success',
  },
})
export class SuccessButtonDirective extends NgxButtonDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    super(element, renderer);
  }

  override ngOnInit() {
    this.setStyle();
  }

  override setStyle() {
      
    switch (this.ngxType) {
      case 'primary': {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', this.disabled ? '#30E87A' : '#5AF499');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#18181B');
        break;
      }
      case 'default': {
        this.renderer.setStyle(this.element.nativeElement, 'color', '#5AF499');
        this.renderer.setStyle(this.element.nativeElement, 'border-color', '#5AF499');
        break;
      }
      case 'dashed': {
        this.renderer.setStyle(this.element.nativeElement, 'color', '#5AF499');
        this.renderer.setStyle(this.element.nativeElement, 'border-color', '#5AF499');
        break;
      }
      case 'text': {
        this.renderer.setStyle(this.element.nativeElement, 'color', '#5AF499');
        break;
      }
      case 'link': {
        this.renderer.setStyle(this.element.nativeElement, 'color', '#5AF499');
        break;
      }
    }
  }

}
