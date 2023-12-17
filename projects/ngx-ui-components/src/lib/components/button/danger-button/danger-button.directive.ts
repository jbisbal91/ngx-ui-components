import { OnInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { NgxButtonDirective } from '../ngx-button/ngx-button.directive';

@Directive({
  selector: '[ngxDanger]'
})
export class DangerButtonDirective extends NgxButtonDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    super(element, renderer);
  }

  override ngOnInit() {
    this.setStyle();
  }

  override setStyle() {
      
    switch (this.ngxType) {
      case 'primary': {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', this.disabled ? '#FFC1C1' : '#FF4D4F');
        break;
      }
      case 'default': {
        this.renderer.setStyle(this.element.nativeElement, 'color', '#FF4D4F');
        this.renderer.setStyle(this.element.nativeElement, 'border-color', '#FF4D4F');
        break;
      }
      case 'dashed': {
        this.renderer.setStyle(this.element.nativeElement, 'color', '#FF4D4F');
        this.renderer.setStyle(this.element.nativeElement, 'border-color', '#FF4D4F');
        break;
      }
      case 'text': {
        this.renderer.setStyle(this.element.nativeElement, 'color', '#FF4D4F');
        break;
      }
      case 'link': {
        this.renderer.setStyle(this.element.nativeElement, 'color', '#FF4D4F');
        break;
      }
    }
  }
}