import {
  AfterContentInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
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
  standalone: true,
})
export class ColDirective implements AfterContentInit, OnDestroy {
  @Input({ transform: numberAttribute }) ngxSpan: number = 0;
  private subscription: Subscription = new Subscription();

  constructor(
    public elementRef: ElementRef,
    private renderer2: Renderer2,
    private gridService: GridService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterContentInit(): void {
    this.cdr.markForCheck();
    this.subscription.add(
      this.gridService.ngxSpan$.subscribe((totalCols) => {
        if (totalCols) {
          this.setMaxWidthCols(totalCols);
        }
      })
    );
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
