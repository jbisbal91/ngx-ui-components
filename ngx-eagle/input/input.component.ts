import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Optional,
  Renderer2,
  Self,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgxFillMode, NgxRounded, NgxSize } from './typings';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ColorContrast } from 'ngx-eagle/core/types';
import { ColorConverter } from 'ngx-eagle/core/services';

const ngxSizeMap = {
  small: '2.5rem',
  medium: '3rem',
  large: '3.5rem',
};

const ngxRoundedOutlinedMap = {
  small: '2px',
  medium: '4px',
  large: '6px',
};

const ngxRoundedfilledMap = {
  small: '2px 2px 0px 0px',
  medium: '4px 4px 0px 0px',
  large: '6px 6px 0px 0px',
};

@Component({
  selector: 'ngx-input',
  template: `
    <div
      #input_container
      class="ngx-input"
      [class.ngx-input-filled]="ngxFillMode === 'filled'"
      [class.ngx-input-outlined]="ngxFillMode === 'outlined'"
    >
      <label #input_label class="ngx-input-label">{{ label }}</label>
      <input
        #input
        class="ngx-nat-input"
        [placeholder]="placeholder"
        [value]="value"
        [disabled]="disabled"
        (input)="onInputChange($event)"
      />
    </div>
  `,
  standalone: true,
})
export class InputComponent
  implements AfterViewInit, ControlValueAccessor, OnChanges
{
  @Input() ngxSize: NgxSize = 'medium';
  @Input() ngxRounded: NgxRounded = 'medium';
  @Input() ngxFillMode: NgxFillMode = 'filled';
  @Input() label: string = '';
  @Input() ngxColor: ColorContrast | string = '#1890FF';
  @Input() placeholder: string = '';

  @ViewChild('input_container') containerRef!: ElementRef;
  @ViewChild('input_label') labelRef!: ElementRef;
  @ViewChild('input') inputRef!: ElementRef;

  onChange: any = () => {};
  onTouched: any = () => {};
  value: any;
  valStatus: boolean = true;
  disabled: boolean = false;
  inputFocus = false;

  backgroundColor: string = 'currentColor';
  color: string = 'currentColor';

  constructor(
    public elementRef: ElementRef,
    private renderer: Renderer2,
    private colorConverter: ColorConverter,
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngAfterViewInit() {
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('ngxColor')) {
      const newColor = changes['ngxColor']?.currentValue;
      if (typeof newColor === 'string') {
        const { backgroundColor, overlayColor } =
          this.colorConverter.contrastingColors(newColor);
        this.backgroundColor = backgroundColor;
        this.color = overlayColor;
      }
      if (typeof newColor === 'object') {
        this.backgroundColor = newColor.backgroundColor;
        this.color = newColor.overlayColor;
      }
      this.initialize();
    }
  }

  initialize() {
    setTimeout(() => {
      this.renderer.setStyle(
        this.inputRef.nativeElement,
        'background-color',
        this.ngxFillMode === 'filled' ? this.backgroundColor : 'transparent'
      );

      this.renderer.setStyle(this.inputRef.nativeElement, 'color', this.color);
      this.ngControl.control?.setValue(this.value);
      const borderRadius =
        this.ngxFillMode === 'outlined'
          ? ngxRoundedOutlinedMap[this.ngxRounded]
          : ngxRoundedfilledMap[this.ngxRounded];
      this.renderer.setStyle(
        this.containerRef?.nativeElement,
        'height',
        ngxSizeMap[this.ngxSize]
      );
      this.renderer.setStyle(
        this.containerRef?.nativeElement,
        'color',
        this.backgroundColor
      );
      this.renderer.setStyle(
        this.containerRef?.nativeElement,
        'border-radius',
        borderRadius
      );
      this.renderer.setStyle(
        this.labelRef?.nativeElement,
        'position',
        'absolute'
      );
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
    const top = this.ngxFillMode === 'outlined' ? '-0.375rem' : '0px';
    this.setLabelStyle(top, '0.75rem');
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
    if (this.ngxFillMode === 'outlined') {
      const containerWidth = this.containerRef.nativeElement.offsetWidth;
      const labelWidth = this.labelRef.nativeElement.offsetWidth;
      const percent = ((labelWidth + 10) / containerWidth) * 100;
      const color = this.valStatus ? this.backgroundColor : '#F44336';
      const background = `linear-gradient(to right, ${color} 5px, transparent 5px, transparent ${percent}%, ${color} ${percent}%) no-repeat top/100% 1px`;
      this.renderer.setStyle(
        this.containerRef.nativeElement,
        'background',
        background
      );
    }
  }

  drawLineTopBorder() {
    const color = this.valStatus ? this.backgroundColor : '#F44336';
    const background =
      this.ngxFillMode === 'outlined'
        ? `linear-gradient(to right, transparent 0%, ${color} 0%) no-repeat top/100% 1px`
        : 'none';
    this.renderer.setStyle(
      this.containerRef.nativeElement,
      'background',
      background
    );
  }

  validate() {
    this.valStatus =
      this.ngControl.status?.toLowerCase() === 'valid' ? true : false;
    const color = this.valStatus ? this.backgroundColor : '#F44336';
    this.renderer.setStyle(this.containerRef.nativeElement, 'color', color);
    this.renderer.setStyle(this.inputRef.nativeElement, 'caret-color', color);
  }
}
