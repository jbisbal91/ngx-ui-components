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
import { StylesService } from 'ngx-eagle/core/services';
import { ErrorColor } from 'ngx-eagle/core/types';

@Component({
  selector: 'ngx-outlined-text-field',
  template: `
    <div #input_container class="ngx-outlined-text-field">
      <label #input_label class="ngx-input-label">{{ label }}</label>
      <input
        #input
        [type]="type"
        class="ngx-outlined-text-field ngx-nat-input"
        [placeholder]="placeholder"
        [value]="value"
        [disabled]="disabled"
        [required]="_required"
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
  @Input() value: any = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  _placeholder: string = '';
  _required: boolean = true;
  @ViewChild('input_container') containerRef!: ElementRef;
  @ViewChild('input_label') labelRef!: ElementRef;
  @ViewChild('input') inputRef!: ElementRef;

  borderColor: string = '#747775';
  onChange: any = () => {};
  onTouched: any = () => {};

  isValid: boolean = true;
  disabled: boolean = false;
  inputFocus = false;

  constructor(
    public elementRef: ElementRef,
    private renderer: Renderer2,
    private stylesService: StylesService,
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    this.disabled = this.elementRef?.nativeElement.hasAttribute('disabled');
    this._required = this.elementRef?.nativeElement.hasAttribute('required');
  }

  ngAfterViewInit() {
    this.customProperties();
    this.initialize();
    //Se lanza el evento cuando se esta haciendo focus en el input
    this.inputRef.nativeElement.addEventListener('focus', () => {
      this.inputFocus = true;
      //this.validate();
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
    const styles: any = {
      'border-color': (value: any) => {
        this.borderColor = value;
        this.renderer.setStyle(
          this.containerRef.nativeElement,
          'border-color',
          value
        );
      },
      'border-radius': (value: any) =>
        this.renderer.setStyle(
          this.containerRef.nativeElement,
          'border-radius',
          value !== '0px' ? value : '4px'
        ),
      'font-size': (value: any) =>
        this.renderer.setStyle(
          this.inputRef.nativeElement,
          'font-size',
          value !== '0px' ? value : '14px'
        ),
    };

    for (const style in styles) {
      if (styles.hasOwnProperty(style)) {
        const value = this.stylesService.getStyleValue(
          this.elementRef.nativeElement,
          style
        );
        styles[style](value);
      }
    }
  }

  ngOnChanges(): void {
    this.initialize();
  }

  initialize() {
    setTimeout(() => {
      this.ngControl?.control?.setValue(this.value);
      this._placeholder = this.placeholder;
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
      if (this.inputFocus || this.isValidValue(this.value)) {
        this.applyFocusedStyle();
      } else {
        this.applyDefaultStyle(containerHeight);
      }
    }
  }

  private applyFocusedStyle() {
    this.setLabelStyle('-0.375rem', '0.75rem');
    this.inputRef.nativeElement.placeholder = this._placeholder;
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
    this.ngControl?.control?.setValue(this.value);
    this.validate();
    this.buildBorderOutlined();
  }

  buildBorderOutlined() {
    const containerWidth = this.containerRef.nativeElement.offsetWidth;
    const labelWidth = this.labelRef.nativeElement.offsetWidth;
    const percent = ((labelWidth + 16) / containerWidth) * 100;
    const color = this.isValid ? this.borderColor : ErrorColor;
    const background = `linear-gradient(to right, ${color} 8px, transparent 8px, transparent ${percent}%, ${color} ${percent}%) no-repeat top/100% 1px`;
    this.renderer.setStyle(
      this.containerRef.nativeElement,
      'background',
      background
    );
  }

  drawLineTopBorder() {
    const color = this.isValid ? this.borderColor : ErrorColor;
    this.renderer.setStyle(
      this.containerRef.nativeElement,
      'background',
      `linear-gradient(to right, transparent 0%, ${color} 0%) no-repeat top/100% 1px`
    );
  }

  validate() {
    if (this.ngControl || this._required) {
      this.isValid =
        this.ngControl?.status?.toLowerCase() === 'valid' ||
        (this._required && this.isValidValue(this.value))
          ? true
          : false;
      const color = this.isValid ? this.borderColor : ErrorColor;
      this.renderer.setStyle(
        this.containerRef.nativeElement,
        'border-color',
        color
      );
    }
  }

  isValidValue(value: any): boolean {
    return value !== undefined && value !== null && value !== '';
  }
}
