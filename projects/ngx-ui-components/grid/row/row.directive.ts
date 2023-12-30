import {
  AfterContentInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
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
  providers: [GridService],
})
export class RowDirective implements OnInit {
  @Input({ transform: numberAttribute }) ngxSpan!: number;
  @Input({ transform: numberAttribute }) ngxGutter!: number;

  constructor(
    public elementRef: ElementRef,
    private gridService: GridService
  ) {}

  ngOnInit(): void {
    this.gridService.setNgxGutter(this.ngxGutter);
  }
}
