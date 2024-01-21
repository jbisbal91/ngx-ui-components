import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NgxFillMode, NgxRounded, NgxSize } from './typings';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'ngx-form-field',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'ngx-form-field',
    '[class.ngx-form-field-sm]': `ngxSize === 'small'`,
    '[class.ngx-form-field-md]': `ngxSize === 'medium'`,
    '[class.ngx-form-field-lg]': `ngxSize === 'large'`,
    '[class.ngx-rounded-sm]': `ngxRounded === 'small'`,
    '[class.ngx-rounded-md]': `ngxRounded === 'medium'`,
    '[class.ngx-rounded-lg]': `ngxRounded === 'large'`,
    '[class.ngx-rounded-full]': `ngxRounded === 'full'`,
    '[class.ngx-form-field-filled]': `ngxFillMode === 'filled'`,
    '[class.ngx-form-field-outlined]': `ngxFillMode === 'outlined'`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FormFieldComponent implements OnInit, OnChanges {
  @Input() ngxSize: NgxSize = 'medium';
  @Input() ngxRounded: NgxRounded = 'full';
  @Input() ngxFillMode: NgxFillMode = 'filled';

  readonly ngxSize$ = new ReplaySubject<NgxSize>(1);
  readonly ngxFillMode$ = new ReplaySubject<NgxFillMode>(1);

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxSize']?.currentValue) {
      this.ngxSize$.next(this.ngxSize);
    }
    if (changes['ngxFillMode']?.currentValue) {
      this.ngxFillMode$.next(this.ngxFillMode);
    }
    this.cdr.markForCheck();
  }

  ngOnInit(): void {
    this.ngxSize$.next(this.ngxSize);
    this.ngxFillMode$.next(this.ngxFillMode);
    this.cdr.markForCheck();
  }
}
