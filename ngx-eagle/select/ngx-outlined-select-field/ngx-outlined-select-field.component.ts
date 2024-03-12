import { NgIf, NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Optional,
  Output,
  QueryList,
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
import { Subscription } from 'rxjs';
import { NgxOptionComponent } from '../ngx-option/ngx-option.component';

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
  @ContentChildren(NgxOptionComponent)
  public optionList!: QueryList<NgxOptionComponent>;

  @Input({ transform: booleanAttribute }) autocomplete: boolean = false;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) multiple: boolean = false;
  @Input() label!: string;
  @Input() pattern!: any;
  @Input() placeholder: string = '';
  @Input() prefix!: any | TemplateRef<void>;
  @Input({ transform: booleanAttribute }) required!: boolean;
  @Input({ transform: numberAttribute }) rows: number = 4;
  @Input() suffix!: any | TemplateRef<void>;

  internalValue: any = null;

  @Input()
  get value(): any {
    return this.internalValue;
  }

  set value(value: any) {
    setTimeout(() => {
      if (!this.multiple) {
        this.selectOption(value);
      }
    }, 100);
  }

  @Output() onChangeValue: EventEmitter<any> = new EventEmitter<any>();

  _placeholder: string = '';
  errorText: string = '';

  public inputPrefixId: string = Guid.create();

  optPos: 'bottom' | 'top' = 'bottom';

  @ViewChild('input_container') containerRef!: ElementRef;
  @ViewChild('input_label') labelRef!: ElementRef;
  @ViewChild('input') inputRef!: ElementRef;
  @ViewChild('options_container') optionsRef!: ElementRef;

  borderColor: string = '#747775';
  onChange: any = () => {};
  onTouched: any = () => {};

  private subscription: Subscription = new Subscription();

  isValid: boolean = true;
  isFocused: boolean = false;
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
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.customProperties();
    this.initialize();
    this.optionList.forEach((opt) => {
      this.subscription.add(
        opt.onSelect.subscribe(() => {
          if (!this.multiple) {
            this.selectOption(opt.value);
          }
        })
      );
    });
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.autocomplete) {
      event.preventDefault();
    }
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
    this.moveLabel();
    setTimeout(() => {
      this.errorText =
        this.elementRef?.nativeElement.attributes['error-text']?.value;
      this.ngControl?.control?.setValue(this.internalValue);
    });
  }

  writeValue(value: any): void {
    setTimeout(() => {
      if (!this.multiple && value) {
        this.selectOption(value);
      }
    }, 100);
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

  selectOption(value: string) {
    let found = false;
    this.optionList.forEach((opt) => {
      if (opt.value === value) {
        this.internalValue = opt.label;
        opt.selected = true;
        this.onChange(opt.value);
        this.onChangeValue.emit(opt.value);
        found = true;
        this.moveLabel();
      } else {
        opt.selected = false;
      }
    });
    if (!found) {
      this.internalValue = null;
      this.onChange(null);
      this.onChangeValue.emit(null);
    }
  }

  moveLabel() {
    const containerHeight = this.containerRef?.nativeElement.offsetHeight;
    if (
      (this.isFocused ||
        this.isValidValue(this.internalValue) ||
        this.isValidValue(this.inputRef.nativeElement.value)) &&
      this.label
    ) {
      this.applyFocusedStyle();
    } else {
      this.applyDefaultStyle(containerHeight);
    }
  }

  private applyFocusedStyle() {
    this.setLabelStyle('-0.375rem', '0.75rem');
    this._placeholder = this.placeholder;
    this.buildBorderOutlined();
  }

  private applyDefaultStyle(containerHeight: number) {
    const height = (containerHeight - 14) / 2;
    this.setLabelStyle(`${height / 16}rem`, '0.875rem');
    this._placeholder = '';
    this.drawLineTopBorder();
  }

  private setLabelStyle(top: string, fontSize: string) {
    const left =
      this.prefix && !this.isFocused && !this.internalValue && !this.autofilled
        ? `${this.prefixWidth()}px`
        : '0.75rem';
    this.renderer.setStyle(this.labelRef?.nativeElement, 'top', top);
    this.renderer.setStyle(this.labelRef?.nativeElement, 'font-size', fontSize);
    this.renderer.setStyle(this.labelRef?.nativeElement, 'left', left);
  }

  prefixWidth() {
    const prefix = document.getElementById(this.inputPrefixId);
    const result = prefix ? prefix?.offsetWidth : 0;
    return result;
  }

  onInput(event: Event): void {
    if (this.autocomplete) {
      this.onSearch(event);
    }
    if (this.label) {
      this.buildBorderOutlined();
    } else {
      this.drawLineTopBorder();
    }
  }

  onSearch(event: Event) {
    const search = (event.target as HTMLInputElement).value.toLowerCase();
    if (search === '') {
      this.internalValue = '';
    }
    this.optionList.forEach((option: NgxOptionComponent) => {
      const label = option.label.toLowerCase();
      option.isVisible = label.includes(search);
      if (option.isVisible && option.selected) {
        option.selected = false;
      }
    });
  }

  onFocus(event: FocusEvent) {
    this.isFocused = true;
    this.moveLabel();
    this.showBackdrop();
    this.adjustOptionsPosition();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.adjustOptionsPosition();
  }

  adjustOptionsPosition() {
    const contProp = this.containerRef.nativeElement.getBoundingClientRect();
    let top = contProp.top + contProp.height;
    const offsetTop = contProp.top;
    const offsetBottom = window.innerHeight - top;
    this.optPos = 'bottom';
    setTimeout(() => {
      if (this.optionsRef) {
        const offsetHeight = this.optionsRef.nativeElement.offsetHeight;
        if (offsetTop > offsetBottom && offsetHeight <= offsetTop) {
          top = top - (offsetHeight + contProp.height + 4);
          this.optPos = 'top';
        }
        this.renderer.setStyle(
          this.optionsRef.nativeElement,
          'top',
          `${top}px`
        );
      }
    });
  }

  showBackdrop() {
    const backdrop = document.createElement('div');
    backdrop.classList.add('ngx-backdrop');
    document.body.appendChild(backdrop);
  }

  hideBackdrop() {
    const backdrop = document.querySelector('.ngx-backdrop');
    backdrop?.remove();
  }

  onBlur(event: FocusEvent) {
    setTimeout(() => {
      this.isFocused = false;
      this.validate();
      this.moveLabel();
      this.hideBackdrop();
    }, 100);
  }

  buildBorderOutlined() {
    const percent = this.calculateBorderPercent();
    const background = this.calculateBackgroundStyle(percent);
    this.setBorderTop('unset');
    this.renderer.setStyle(
      this.containerRef.nativeElement,
      'background',
      background
    );
  }

  private calculateBorderPercent(): number {
    const containerWidth = this.containerRef.nativeElement.offsetWidth;
    const labelWidth = this.labelRef.nativeElement.offsetWidth;
    return ((labelWidth + 16) / containerWidth) * 100;
  }

  private calculateBackgroundStyle(percent: number): string {
    const color = this.isValid ? this.borderColor : ErrorColor;
    return `linear-gradient(to right, ${color} 8px, transparent 8px, transparent ${percent}%, ${color} ${percent}%) no-repeat top/100% 1px`;
  }

  drawLineTopBorder() {
    const color = this.isValid ? this.borderColor : ErrorColor;
    this.setBorderTop('unset');
    this.renderer.setStyle(
      this.containerRef.nativeElement,
      'background',
      `linear-gradient(to right, transparent 0%, ${color} 0%) no-repeat top/100% 1px`
    );
  }

  setBorderTop(border: string) {
    this.renderer.setStyle(
      this.containerRef.nativeElement,
      'border-top',
      border
    );
  }

  validate() {
    this.isValid =
      (!this.pattern && !this.ngControl && !this.required) ||
      this.ngControl?.status?.toLowerCase() === 'valid' ||
      (this.required &&
        this.isValidValue(this.internalValue) &&
        !this.ngControl) ||
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
