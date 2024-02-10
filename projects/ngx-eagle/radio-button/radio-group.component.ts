import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  OnDestroy,
  QueryList,
  forwardRef,
} from '@angular/core';
import { RadioButtonComponent } from './radio-button.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-radio-group',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'ngx-radio-group',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RadioGroupComponent
  implements AfterContentInit, OnDestroy, ControlValueAccessor
{
  @ContentChildren(RadioButtonComponent)
  public radioButtons!: QueryList<RadioButtonComponent>;

  private subscription: Subscription = new Subscription();

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private elementRef: ElementRef) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterContentInit(): void {
    const disabled = this.elementRef.nativeElement.hasAttribute('disabled');
    this.setDisabledState(disabled);
    this.radioButtons.forEach((rb) => {
      this.subscription.add(
        rb.onclick.subscribe(() => {
          this.setValue(rb.ngxValue);
          this.onChange(rb.ngxValue);
        })
      );
    });
  }

  writeValue(value: any): void {
    if (value) {
      this.setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.radioButtons?.forEach((rb) => (rb.disabled = disabled));
  }

  setValue(ngxValue: any) {
    this.radioButtons.forEach((rb) => {
      rb.checked = rb.ngxValue === ngxValue ? true : false;
    });
  }
}
