import {
  AfterContentInit,
  ChangeDetectorRef,
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
  providers: [GridService]
})
export class RowDirective {
  @Input() ngxGutter: string | number | null = null;

  constructor(
    public elementRef: ElementRef,
    private gridService: GridService,
  ) {
  }

 

}
