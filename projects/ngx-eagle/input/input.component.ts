import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Optional,
  Self,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgxFillMode, NgxRounded, NgxSize } from './typings';
import { ControlValueAccessor, NgControl } from '@angular/forms';

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
  @Input() placeholder: string = '';

  @ViewChild('input_container') containerRef!: ElementRef;
  @ViewChild('input_label') labelRef!: ElementRef;
  @ViewChild('input') inputRef!: ElementRef;

  value: any;
  valStatus: boolean = true;

  inputFocus = false;
  constructor(
    public elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
    @Optional() @Self() public ngControl: NgControl
  ) {
    this.ngControl.valueAccessor = this;
  }

  ngAfterViewInit() {
    this.initialize();
    //Se lanza el evento cuando se esta haciendo focus en el input
    this.inputRef.nativeElement.addEventListener('focus', () => {
      this.inputFocus = true;
      this.moveLabel();
    });
    //Se lanza el evento cuando se desenfoca del input
    this.inputRef.nativeElement.addEventListener('blur', () => {
      this.inputFocus = false;
      this.moveLabel();
      this.validate();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxSize']?.currentValue) {
      this.initialize();
    }
    if (changes['ngxFillMode']?.currentValue) {
      this.initialize();
    }

    if (changes['ngxRounded']?.currentValue) {
      this.initialize();
    }

    this.cdr.markForCheck();
  }

  initialize() {
    setTimeout(() => {
      this.ngControl.control?.setValue(this.value);
      this.containerRef.nativeElement.style.height = ngxSizeMap[this.ngxSize];
      this.containerRef.nativeElement.style.borderRadius =
        this.ngxFillMode === 'outlined'
          ? ngxRoundedOutlinedMap[this.ngxRounded]
          : ngxRoundedfilledMap[this.ngxRounded];
      this.labelRef.nativeElement.style.position = 'absolute';
      this.placeholder = this.inputRef.nativeElement.placeholder;
      this.moveLabel();
      this.validate();
    });
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    //throw new Error('Method not implemented.');
  }

  registerOnTouched(fn: any): void {
    //throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  }

  moveLabel() {
    if (this.labelRef.nativeElement) {
      const containerHeight = this.containerRef.nativeElement.offsetHeight;
      if (this.inputFocus || this.value) {
        const top = this.ngxFillMode === 'outlined' ? '-0.375rem ' : '0px';
        this.labelRef.nativeElement.style.top = top;
        this.labelRef.nativeElement.style.fontSize = '0.75rem';
        this.inputRef.nativeElement.placeholder = this.placeholder;
        this.buildBorderOutlined();
      } else {
        const top = `${(containerHeight * 0.3333) / 16}rem`;
        this.labelRef.nativeElement.style.top = top;
        this.labelRef.nativeElement.style.fontSize = '0.875rem';
        this.inputRef.nativeElement.placeholder = '';
        this.drawLineTopBorder();
      }
    }
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
      let color = this.valStatus // validacion
        ? this.inputFocus // si esta el input con el focus activo coloca el color que le corresponde
          ? 'var(--ngx-comp-form-field-filled-border-color)'
          : 'currentColor'
        : '#F44336';
      const background = `linear-gradient(to right, ${color} 5px, transparent 5px, transparent ${percent}%, ${color} ${percent}%) no-repeat top/100% 1px`;
      const borderColor = `transparent ${color} ${color}`;
      this.containerRef.nativeElement.style.borderColor = borderColor;
      this.containerRef.nativeElement.style.background = background;
    }
  }

  drawLineTopBorder() {
    const background =
      this.ngxFillMode === 'outlined'
        ? 'linear-gradient(to right, transparent 0%, currentColor 0%) no-repeat top/100% 1px'
        : 'none';
    const borderColor = `transparent currentColor currentColor`;
    this.containerRef.nativeElement.style.borderColor = borderColor;
    this.containerRef.nativeElement.style.background = background;
  }

  validate() {
    this.valStatus =
      this.ngControl.status?.toLowerCase() === 'valid' ? true : false;
    this.containerRef.nativeElement.style.color = this.valStatus
      ? 'currentColor'
      : '#F44336';

    this.inputRef.nativeElement.style.color = this.valStatus
      ? 'var(--ngx-comp-form-field-filled-border-color)'
      : '#F44336';
  }
}
