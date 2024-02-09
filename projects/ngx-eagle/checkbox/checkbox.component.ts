import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
  booleanAttribute,
  forwardRef,
} from '@angular/core';
import { GuidService } from './guid.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-checkbox',
  template: `
    <input
      #input_checkbox
      [id]="id"
      type="checkbox"
      class="ngx-nat-input"
      [indeterminate]="indeterminate"
      [checked]="checked"
      [disabled]="disabled"
      (change)="eventChecked($event)"
    />
    <label [for]="id"><ng-content></ng-content></label>
  `,
  host: {
    class: 'ngx-checkbox',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input({ transform: booleanAttribute }) indeterminate: boolean = false;
  @Input() checked: boolean = false;
  @Input() ngxColor: string = '#1890FF';

  @ViewChild('input_checkbox') inputCheckboxRef!: ElementRef;

  disabled: boolean = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  public id: string = '';

  constructor(
    private guidService: GuidService,
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef
  ) {
    this.id = 'ngx-checkbox-' + this.guidService.guid() + '-input';
    this.disabled = elementRef.nativeElement.hasAttribute('disabled');
  }

  eventChecked(event: Event) {
    if (!this.disabled) {
      this.checked = this.checked ? false : true;
      this.writeValue(this.checked);
    }
  }

  setColor() {
    setTimeout(() => {
      if (
        this.inputCheckboxRef &&
        (this.inputCheckboxRef.nativeElement.indeterminate ||
          this.inputCheckboxRef.nativeElement.checked)
      ) {
        this.inputCheckboxRef.nativeElement.style.backgroundColor = this
          .disabled
          ? '#9E9E9E'
          : this.ngxColor;
      } else {
        this.inputCheckboxRef.nativeElement.style.backgroundColor =
          'transparent';
      }
    });
  }

  writeValue(checked: boolean): void {
    this.checked = checked;
    this.onChange(this.checked);
    this.setColor();
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
    this.cdr.markForCheck();
  }
}
