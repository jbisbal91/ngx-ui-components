import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: 'th[ngxResize]',
  standalone: true,
})
export class ResizeDirective implements OnInit {
  private isLeftClickPressed = false;
  resize: HTMLElement;
  startX = 0;
  width = 0;
  mouseMovement = 0;
  constructor(private renderer: Renderer2, public elementRef: ElementRef) {
    this.resize = document.createElement('div');
  }

  ngOnInit(): void {
    this.buildResize();
    const cellProp = this.elementRef.nativeElement.getBoundingClientRect();
    this.width = cellProp.width;
    this.resize.addEventListener('mousedown', this.onMouseDown.bind(this));
  }

  buildResize() {
    this.renderer.addClass(this.resize, 'ngx-th-resize');
    this.renderer.appendChild(this.elementRef.nativeElement, this.resize);
  }

  onMouseDown(event: MouseEvent) {
    if (event.button === 0) {
      this.isLeftClickPressed = true;
    }
    if (this.isLeftClickPressed) {
      this.startX = event.clientX;
      this.renderer.listen(
        'document',
        'mousemove',
        this.onMouseMove.bind(this)
      );
    }
  }

  onMouseMove(event: MouseEvent) {
    if (event.button === 0 && this.isLeftClickPressed) {
      this.mouseMovement = event.clientX - this.startX;
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'min-width',
        `${this.width + this.mouseMovement}px`
      );
    }
  }

  @HostListener('document:mouseup', ['$event'])
  mouseup(event: MouseEvent) {
    if (event.button === 0 && this.isLeftClickPressed) {
      this.isLeftClickPressed = false;
      this.width += this.mouseMovement;
    }
  }
}
