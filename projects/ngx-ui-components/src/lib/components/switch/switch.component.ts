import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent implements ControlValueAccessor,AfterContentInit {
  isChecked = false;
  onChange: any = () => {};
  onTouched: any = () => {};
  @Input() ngxDisabled: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentInit(): void {
    this.ngxDisabled = this.ngxDisabled;
    this.cdr.markForCheck();
  }

  writeValue(value: boolean): void {
    this.isChecked = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    console.log(fn);
    //this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    //this.onTouched = fn;
    console.log(fn);
  }
  setDisabledState(disabled: boolean): void {
    //this.cdr.markForCheck();
  }

  toggle(): void {
    this.writeValue(!this.isChecked);
  }
}
