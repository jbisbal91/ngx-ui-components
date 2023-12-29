import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  numberAttribute,
} from '@angular/core';
import { GridService } from '../service/grid.service';

@Directive({
  selector: '[ngx-row]',
  host: {
    class: 'ngx-row',
  },
  standalone: true,
})
export class RowDirective implements OnChanges {
  @Input() ngxGutter: string | number | null = null;
  @Input({ transform: numberAttribute }) ngxSpan: number  = 0;

  constructor(
    public elementRef: ElementRef,
    private renderer2: Renderer2,
    private gridService: GridService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxSpan'].currentValue) {
      this.gridService.setNgxSpan(changes['ngxSpan'].currentValue);
    }
  }
}
