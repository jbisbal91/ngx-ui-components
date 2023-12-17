import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgxButtonDirective } from '../ngx-button/ngx-button.directive';

@Directive({
  selector: '[ngxBlock]'
})
export class BlockButtonDirective extends NgxButtonDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    super(element, renderer);
  }

  override ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'width', '100%');
  }
}
