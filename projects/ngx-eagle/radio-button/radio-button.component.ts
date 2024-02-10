import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { GuidService } from './guid.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButton } from './radio-button.interface';

@Component({
  selector: 'ngx-radio-button',
  template: `
    <input
      #input_radio_button
      [id]="id"
      type="radio"
      [checked]="checked"
      [disabled]="disabled"
      (change)="eventChecked($event)"
    />
    <label [for]="id"><ng-content></ng-content></label>
  `,
  host: {
    class: 'ngx-radio-button',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true,
    },
  ],
  standalone: true,
})
export class RadioButtonComponent
  implements RadioButton, AfterViewChecked, AfterViewInit, ControlValueAccessor
{
  public id: string = '';
  @Input() public checked: boolean = false;
  disabled: boolean = false;
  @Input() ngxColor: string = '#1890FF';
  @Input() public ngxValue: string = '';

  @Output() onclick: EventEmitter<RadioButton> =
    new EventEmitter<RadioButton>();

  @ViewChild('input_radio_button') inputRadioRef!: ElementRef;

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(
    private guidService: GuidService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.id = 'ngx-radio-button-' + this.guidService.guid() + '-input';
    this.disabled = elementRef.nativeElement.hasAttribute('disabled');
  }

  eventChecked(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!this.disabled) {
      this.checked = target.checked;
      this.writeValue(this.checked);
      this.onClick();
    }
  }

  onClick() {
    let rb = {
      id: this.id,
      checked: this.checked,
      disabled: this.disabled,
      ngxColor: this.ngxColor,
      ngxValue: this.ngxValue,
    };
    this.onclick.emit(rb);
  }

  ngAfterViewChecked(): void {
    this.setAccentColor();
  }

  ngAfterViewInit(): void {
    this.setAccentColor();
  }

  writeValue(value: boolean): void {
    this.checked = value;
    this.onChange(this.checked);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
  }

  setAccentColor() {
    this.renderer.setStyle(
      this.inputRadioRef.nativeElement,
      'accent-color',
      this.disabled ? '#9E9E9E' : this.ngxColor
    );
  }
}
