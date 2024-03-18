import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { NgxSort } from '../typings';

@Directive({
  selector: 'th[ngxSort]',
  standalone: true,
})
export class SortDirective implements OnInit {
  status: NgxSort = null;
  sort = document.createElement('div');
  arrowUp = document.createElement('span');
  arrowDown = document.createElement('span');

  @Output() changeSorting = new EventEmitter<NgxSort>();
  constructor(private renderer: Renderer2, public elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.addEventListener(
      'click',
      this.onClick.bind(this)
    );
    this.buildSort();
  }

  buildSort() {
    this.renderer.addClass(this.elementRef.nativeElement, 'ngx-th-sort-arrow');
    this.renderer.addClass(this.sort, 'ngx-sort-arrow');
    this.renderer.addClass(this.arrowUp, 'ngx-arrow-up');
    this.renderer.addClass(this.arrowDown, 'ngx-arrow-down');
    this.renderer.appendChild(this.sort, this.arrowUp);
    this.renderer.appendChild(this.sort, this.arrowDown);
    this.renderer.appendChild(this.elementRef.nativeElement, this.sort);
  }

  onClick(event: MouseEvent) {
    if (this.status === null) {
      this.status = 'ascend';
      this.renderer.addClass(this.arrowUp, 'active');
      this.renderer.removeClass(this.arrowDown, 'active');
    } else if (this.status === 'ascend') {
      this.status = 'descend';
      this.renderer.removeClass(this.arrowUp, 'active');
      this.renderer.addClass(this.arrowDown, 'active');
    } else {
      this.status = null;
      this.renderer.removeClass(this.arrowUp, 'active');
      this.renderer.removeClass(this.arrowDown, 'active');
    }
    this.changeSorting.emit(this.status);
  }

  @HostListener('document:click', ['$event'])
  public onClick3(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    if (
      !this.elementRef.nativeElement.contains(clickedElement) &&
      clickedElement.hasAttribute('ngxsort')
    ) {
      this.status = null;
      this.renderer.removeClass(this.arrowUp, 'active');
      this.renderer.removeClass(this.arrowDown, 'active');
    }
  }
}
