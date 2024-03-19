import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'th[ngxResize]',
  standalone: true,
})
export class ResizeDirective implements OnInit  {
  
  startX = 0;

  private isMousePressed = false;
  resize = document.createElement('div');

  constructor(private renderer: Renderer2, public elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this.buildResize();
  }

  buildResize() {
    this.renderer.addClass(this.resize, 'ngx-th-resize');
    this.renderer.appendChild(this.elementRef.nativeElement, this.resize);
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (event.button === 0) {
   

      console.log(event);
    }
  }

}
