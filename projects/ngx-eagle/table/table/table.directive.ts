import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

interface ScrollOptions {
  x?: string;
  y?: string;
}

@Directive({
  selector: 'table[ngx-table]',
  host: {
    class: 'ngx-table',
    '[class.ngx-table-bordered]': 'ngxBordered',
  },
  standalone: true,
})
export class TableDirective implements AfterViewInit {
  @Input() ngxScroll: ScrollOptions | null = null;
  @Input() ngxBordered = false;

  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    this.addScroll();
  }

  private addScroll(): void {
    if (this.ngxScroll) {
      const { x, y } = this.ngxScroll;
      const newDiv = this.renderer2.createElement('div');
      this.renderer2.addClass(newDiv, 'table-container');
      if (x || y) {
        this.renderer2.setStyle(newDiv, 'overflow', 'scroll');
        if (x) {
          this.renderer2.setStyle(newDiv, 'max-width', x);
        }
        if (y) {
          this.renderer2.setStyle(newDiv, 'max-height', y);
        }
        this.renderer2.insertBefore(
          this.renderer2.parentNode(this.elementRef.nativeElement),
          newDiv,
          this.elementRef.nativeElement
        );
        this.renderer2.appendChild(newDiv, this.elementRef.nativeElement);
      }
    }
  }
}
