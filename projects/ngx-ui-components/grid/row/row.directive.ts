import {
  AfterContentInit,
  ChangeDetectorRef,
  Directive,
  Input,
  numberAttribute,
} from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Directive({
  selector: '[ngx-row]',
  host: {
    class: 'ngx-row',
  },
})
export class RowDirective implements AfterContentInit {
  @Input({ transform: numberAttribute }) ngxSpan: number = 24;
  @Input() ngxGutter: string | number | [number, number] | null = null;

  readonly currentSpan$ = new ReplaySubject<number>(24);

  readonly currentGutter$ = new ReplaySubject<
    string | number | [number, number] | null
  >(1);

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentInit(): void {
    this.currentSpan$.next(this.ngxSpan);
    this.currentGutter$.next(this.ngxGutter);
    this.cdr.markForCheck();
  }
}
