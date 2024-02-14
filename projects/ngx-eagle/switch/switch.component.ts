import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxSize } from './typings';

@Component({
  selector: 'ngx-switch',
  template: `
    <button
      class="ngx-switch"
      [class.ngx-switch-sm]="ngxSize === 'small'"
      [class.ngx-switch-df]="ngxSize === 'default'"
      [class.ngx-switch-lg]="ngxSize === 'large'"
      [disabled]="disabled"
      [class.ngx-switch-checked]="isChecked"
      (click)="toggle()"
    >
      <span class="ngx-switch-knob"></span>
      <span class="ngx-switch-inner"></span>
    </button>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ngx-switch',
    '[class.ngx-switch-sm]': `ngxSize === 'small'`,
    '[class.ngx-switch-df]': `ngxSize === 'default'`,
    '[class.ngx-switch-lg]': `ngxSize === 'large'`,
  },
  standalone: true,
})
export class SwitchComponent implements ControlValueAccessor, AfterContentInit {
  isChecked = false;
  onChange: any = () => {};
  onTouched: any = () => {};
  disabled: boolean = false;

  @Input() ngxSize: NgxSize = 'large';

  constructor(private cdr: ChangeDetectorRef, private elementRef: ElementRef) {
    this.disabled = this.elementRef.nativeElement.hasAttribute('disabled');
  }

  ngAfterContentInit(): void {
    this.cdr.markForCheck();
  }

  writeValue(value: boolean): void {
    this.isChecked = value;
    this.onChange(this.isChecked);
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  toggle(): void {
    if (!this.disabled) {
      this.writeValue(!this.isChecked);
    }
  }
}
