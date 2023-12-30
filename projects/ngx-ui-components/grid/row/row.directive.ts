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
  standalone: true,
})
export class RowDirective implements AfterContentInit {
  @Input({ transform: numberAttribute }) ngxSpan: number = 24;
  @Input() ngxGutter!: string;

  readonly currentSpan$ = new ReplaySubject<number>(24);

  readonly currentGutter$ = new ReplaySubject<string>(1);

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentInit(): void {
    this.currentSpan$.next(this.ngxSpan);
    this.currentGutter$.next(this.ngxGutter);
    this.cdr.markForCheck();
  }
}
