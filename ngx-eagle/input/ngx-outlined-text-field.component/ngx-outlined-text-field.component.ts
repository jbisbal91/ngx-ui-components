import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Optional,
  Renderer2,
  Self,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'ngx-outlined-text-field',
  template: `
    <div #input_container class="ngx-outlined-text-field">
      <label #input_label class="ngx-input-label">{{ label }}</label>
      <input
        #input
        class="ngx-outlined-text-field ngx-nat-input"
        [placeholder]="placeholder"
        [value]="value"
        [disabled]="disabled"
        (input)="onInputChange($event)"
      />
    </div>
  `,
  styleUrls: ['./ngx-outlined-text-field.component.css'],
  standalone: true,
})
export class NgxOutlinedTextFieldComponent
  implements AfterViewInit, ControlValueAccessor, OnChanges
{
  @Input() label: string = '';
  @Input() placeholder: string = '';

  @ViewChild('input_container') containerRef!: ElementRef;
  @ViewChild('input_label') labelRef!: ElementRef;
  @ViewChild('input') inputRef!: ElementRef;

  borderColor: string = 'currentColor';

  onChange: any = () => {};
  onTouched: any = () => {};
  value: any;
  valStatus: boolean = true;
  disabled: boolean = false;
  inputFocus = false;

  constructor(
    public elementRef: ElementRef,
    private renderer: Renderer2,
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngAfterViewInit() {
    this.customProperties();

    this.initialize();
    //Se lanza el evento cuando se esta haciendo focus en el input
    this.inputRef.nativeElement.addEventListener('focus', () => {
      this.inputFocus = true;
      this.validate();
      this.moveLabel();
    });
    //Se lanza el evento cuando se desenfoca del input
    this.inputRef.nativeElement.addEventListener('blur', () => {
      this.inputFocus = false;
      this.validate();
      this.moveLabel();
    });
  }

  customProperties() {
    this.borderColor = window
      .getComputedStyle(this.elementRef.nativeElement)
      .getPropertyValue('border-color');

    this.renderer.setStyle(
      this.containerRef.nativeElement,
      'border-color',
      this.borderColor
    );

    const borederRadius = window
      .getComputedStyle(this.elementRef.nativeElement)
      .getPropertyValue('border-radius');

    this.renderer.setStyle(
      this.containerRef.nativeElement,
      'border-radius',
      borederRadius !== '0px' ? borederRadius : '4px'
    );

    const color = window
      .getComputedStyle(this.elementRef.nativeElement)
      .getPropertyValue('color');

    this.renderer.setStyle(this.containerRef.nativeElement, 'color', color);

    const fontSize = window
      .getComputedStyle(this.elementRef.nativeElement)
      .getPropertyValue('font-size');

    this.renderer.setStyle(
      this.inputRef.nativeElement,
      'font-size',
      fontSize !== '0px' ? fontSize : '14px'
    );
  }

  ngOnChanges(): void {
    this.initialize();
  }

  initialize() {
    setTimeout(() => {
      this.ngControl.control?.setValue(this.value);
      this.placeholder = this.inputRef?.nativeElement.placeholder;
      this.moveLabel();
    });
  }

  writeValue(value: any): void {
    this.value = value;
    this.moveLabel();
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  moveLabel() {
    if (this.labelRef) {
      const containerHeight = this.containerRef.nativeElement.offsetHeight;
      if (this.inputFocus || this.value) {
        this.applyFocusedStyle();
      } else {
        this.applyDefaultStyle(containerHeight);
      }
    }
  }

  private applyFocusedStyle() {
    this.setLabelStyle('-0.375rem', '0.75rem');
    this.inputRef.nativeElement.placeholder = this.placeholder;
    this.buildBorderOutlined();
  }

  private applyDefaultStyle(containerHeight: number) {
    const top = `${(containerHeight * 0.3333) / 16}rem`;
    this.setLabelStyle(top, '0.875rem');
    this.inputRef.nativeElement.placeholder = '';
    this.drawLineTopBorder();
  }

  private setLabelStyle(top: string, fontSize: string) {
    this.renderer.setStyle(this.labelRef.nativeElement, 'top', top);
    this.renderer.setStyle(this.labelRef.nativeElement, 'font-size', fontSize);
  }

  onInputChange(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this.ngControl.control?.setValue(this.value);
    this.validate();
    this.buildBorderOutlined();
  }

  buildBorderOutlined() {
    const containerWidth = this.containerRef.nativeElement.offsetWidth;
    const labelWidth = this.labelRef.nativeElement.offsetWidth;
    const percent = ((labelWidth + 16) / containerWidth) * 100;
    const color = this.valStatus ? this.borderColor : '#F44336';
    const background = `linear-gradient(to right, ${color} 8px, transparent 8px, transparent ${percent}%, ${color} ${percent}%) no-repeat top/100% 1px`;
    this.renderer.setStyle(
      this.containerRef.nativeElement,
      'background',
      background
    );
  }

  drawLineTopBorder() {
    const color = this.valStatus ? this.borderColor : '#F44336';
    this.renderer.setStyle(
      this.containerRef.nativeElement,
      'background',
      `linear-gradient(to right, transparent 0%, ${color} 0%) no-repeat top/100% 1px`
    );
  }

  validate() {
    this.valStatus =
      this.ngControl.status?.toLowerCase() === 'valid' ? true : false;
    const color = this.valStatus ? this.borderColor : '#F44336';
    this.renderer.setStyle(
      this.containerRef.nativeElement,
      'border-color',
      color
    );
  }
}
