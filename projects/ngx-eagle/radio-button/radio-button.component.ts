import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
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
  implements AfterViewChecked, AfterViewInit, ControlValueAccessor
{
  @Input() checked: boolean = false;
  @Input() ngxColor: string | undefined | null = '#1890FF';
  @Input() ngxValue: string = '';
  disabled: boolean = false;

  @ViewChild('input_radio_button') inputRadioRef!: ElementRef;

  @Output() onChecked = new EventEmitter<string>();
  onChange: any = () => {
    this.onChecked.emit(this.ngxValue);
  };
  onTouched: any = () => {};

  public id: string = '';
  constructor(
    private guidService: GuidService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.id = 'ngx-radio-button' + this.guidService.guid() + '-input';
    this.disabled = elementRef.nativeElement.hasAttribute('disabled');
  }

  eventChecked(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!this.disabled) {
      this.checked = target.checked;
      this.writeValue(this.checked);
    }
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
