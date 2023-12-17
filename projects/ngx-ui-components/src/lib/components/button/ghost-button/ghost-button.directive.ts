import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgxButtonDirective } from '../ngx-button/ngx-button.directive';

@Directive({
  selector: '[ngxGhost]'
})
export class GhostButtonDirective extends NgxButtonDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    super(element, renderer);
  }

  override ngOnInit() {
    this.setStyle();
  }

  override setStyle() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#FFFFFF');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', '#FFFFFF');
    switch (this.ngxType) {
      case 'primary': {
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#096dd9');
        this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid');
        this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', '#096dd9');
        break;
      }
      case 'text': {
        this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid');
        break;
      }
    }
  }
}
