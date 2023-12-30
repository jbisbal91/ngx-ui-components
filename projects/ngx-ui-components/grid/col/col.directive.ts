import {
  Directive,
  ElementRef,
  Host,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  numberAttribute,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { RowDirective } from '../row/row.directive';

@Directive({
  selector: '[ngx-col]',
  host: {
    class: 'ngx-col',
  },
})
export class ColDirective implements OnInit, OnDestroy {
  @Input({ transform: numberAttribute, required: true }) ngxSpan: number = 24;
  private subscription: Subscription = new Subscription();
  constructor(
    public elementRef: ElementRef,
    private renderer2: Renderer2,
    @Optional() @Host() public rowDirective: RowDirective
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.rowDirective.currentSpan$.subscribe((currentSpan) => {
        this.setMaxWidthCols(currentSpan);
      })
    );
    this.subscription.add(
      this.rowDirective.currentGutter$.subscribe((currentGutter) => {
        if (typeof currentGutter === 'string') {
          this.setGutter(parseFloat(currentGutter));
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  setGutter(gutter: number) {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'padding-left',
      `${gutter / 32}rem`
    );
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'padding-right',
      `${gutter / 32}rem`
    );
  }
}
