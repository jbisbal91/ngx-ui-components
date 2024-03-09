import { NgIf, NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  Optional,
  Renderer2,
  Self,
  TemplateRef,
  ViewChild,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Guid, StylesService } from 'ngx-eagle/core/services';
import { ErrorColor } from 'ngx-eagle/core/types';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'ngx-outlined-select-field',
  templateUrl: './ngx-outlined-select-field.component.html',
  styleUrls: ['./ngx-outlined-select-field.component.scss'],
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
})
export class NgxOutlinedSelectFieldComponent
  implements AfterViewInit, ControlValueAccessor, OnDestroy
{
  @Input() autocomplete: string = '';
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input() label!: string;
  @Input() pattern!: any;
  @Input() placeholder: string = '';
  @Input() prefix!: any | TemplateRef<void>;
  @Input({ transform: booleanAttribute }) required!: boolean;
  @Input({ transform: numberAttribute }) rows: number = 4;
  @Input() suffix!: any | TemplateRef<void>;
  @Input() value: any = '';

  _placeholder: string = '';
  errorText: string = '';

  public inputPrefixId: string = Guid.create();

  @ViewChild('input_container') containerRef!: ElementRef;
  @ViewChild('input_label') labelRef!: ElementRef;
  @ViewChild('input') inputRef!: ElementRef;
  @ViewChild('options_container') optionsRef!: ElementRef;

  borderColor: string = '#747775';
  onChange: any = () => {};
  onTouched: any = () => {};

  isValid: boolean = true;
  isFocused: boolean = false;
  private autofilledSubscription: Subscription = new Subscription();
  autofilled: boolean = false;

  constructor(
    public elementRef: ElementRef,
    private renderer: Renderer2,
    private stylesService: StylesService,
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnDestroy(): void {
    this.autofilledSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.customProperties();
    this.initialize();
    this.autofillMonitor();
    this.onScroll();
  }

  autofillMonitor() {
    if (this.label) {
      this.autofilledSubscription = timer(0, 100).subscribe(() => {
        this.autofilled = this.inputRef.nativeElement.matches(':autofill');
        if (this.autofilled) {
          this.applyFocusedStyle();
        } else {
          this.moveLabel();
        }
      });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    console.log('scrollY', window.scrollY);
    console.log('scrollX', window.scrollX);
    console.log('optionsRef', this.optionsRef?.nativeElement);
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

  typeOf(value: any) {
    return typeof value;
  }

  initialize() {
    setTimeout(() => {
      this.disabled = this.elementRef?.nativeElement.hasAttribute('disabled');
      this.required = this.elementRef?.nativeElement.hasAttribute('required');
      this.errorText =
        this.elementRef?.nativeElement.attributes['error-text']?.value;
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
      if ((this.isFocused || this.isValidValue(this.value)) && this.label) {
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
    const height = (containerHeight - 14) / 2;
    this.setLabelStyle(`${height / 16}rem`, '0.875rem');
    this.inputRef.nativeElement.placeholder = '';
    this.drawLineTopBorder();
  }

  private setLabelStyle(top: string, fontSize: string) {
    const left =
      this.prefix && !this.isFocused && !this.value && !this.autofilled
        ? `${this.prefixWidth()}px`
        : '0.75rem';
    this.renderer.setStyle(this.labelRef.nativeElement, 'top', top);
    this.renderer.setStyle(this.labelRef.nativeElement, 'font-size', fontSize);
    this.renderer.setStyle(this.labelRef.nativeElement, 'left', left);
  }

  prefixWidth() {
    const prefix = document.getElementById(this.inputPrefixId);
    const result = prefix ? prefix?.offsetWidth : 0;
    return result;
  }

  onInput(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this.ngControl?.control?.setValue(this.value);
    this.validate();
    if (this.label) {
      this.buildBorderOutlined();
    } else {
      this.drawLineTopBorder();
    }
  }

  onFocus(event: FocusEvent) {
    this.isFocused = true;
    this.moveLabel();
    setTimeout(() => {
      console.log('offsetTop', this.optionsRef?.nativeElement.offsetTop);
      console.log('offsetBottom', this.optionsRef?.nativeElement.offsetBottom);
    });
  }

  onBlur(event: FocusEvent) {
    this.isFocused = false;
    this.validate();
    this.moveLabel();
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
    this.isValid =
      (!this.pattern && !this.ngControl && !this.required) ||
      this.ngControl?.status?.toLowerCase() === 'valid' ||
      (this.required && this.isValidValue(this.value) && !this.ngControl) ||
      (this.pattern && this.inputRef.nativeElement.validity.valid)
        ? true
        : false;
    const color = this.isValid ? this.borderColor : ErrorColor;
    this.renderer.setStyle(
      this.containerRef.nativeElement,
      'border-color',
      color
    );
  }

  isValidValue(value: any): boolean {
    return value !== undefined && value !== null && value !== '';
  }
}
