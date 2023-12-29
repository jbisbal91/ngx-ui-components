import {
  AfterContentInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  numberAttribute,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { GridService } from '../service/grid.service';

@Directive({
  selector: '[ngx-col]',
  host: {
    class: 'ngx-col',
  },
  providers: [GridService],
})
export class ColDirective implements OnInit {
  @Input({ transform: numberAttribute, required: true }) ngxSpan: number = 24;

  constructor(
    public elementRef: ElementRef,
    private renderer2: Renderer2,
    private gridService: GridService
  ) {}

  ngOnInit(): void {
    this.setMaxWidthCols(24);
  }

  setMaxWidthCols(totalCols: number) {
    const maxWidth = (Number(this.ngxSpan) / totalCols) * 100;
    this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'block');
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'max-width',
      `${maxWidth}%`
    );
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'flex',
      `0 0 ${maxWidth}%`
    );
  }
}
