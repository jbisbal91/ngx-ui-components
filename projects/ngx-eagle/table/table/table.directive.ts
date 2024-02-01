import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: 'table[ngx-table]',
  host: {
    class: 'ngx-table',
  },
  standalone: true,
})
export class TableDirective implements AfterViewInit {
  @Input() ngxScroll: { x?: string; y?: string } | null = null;

  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    this.addScroll();
  }

  addScroll() {
    if (this.ngxScroll) {
      const newDiv = this.renderer2.createElement('div');
      if (this.ngxScroll?.x) {
        this.renderer2.setStyle(newDiv, 'width', this.ngxScroll?.x);
        this.renderer2.setStyle(newDiv, 'overflow-y', 'auto');
      }
      if (this.ngxScroll?.y) {
        this.renderer2.setStyle(newDiv, 'height', this.ngxScroll.y);
        this.renderer2.setStyle(newDiv, 'overflow-y', 'auto');
      }
      const clonedContent = this.elementRef.nativeElement.cloneNode(true);
      this.renderer2.appendChild(newDiv, clonedContent);
      const parent = this.renderer2.parentNode(this.elementRef.nativeElement);
      this.renderer2.insertBefore(
        parent,
        newDiv,
        this.elementRef.nativeElement
      );
      this.renderer2.removeChild(parent, this.elementRef.nativeElement);
    }
  }
}
