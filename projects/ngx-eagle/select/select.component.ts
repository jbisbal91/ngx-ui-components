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
  booleanAttribute,
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
  selector: 'ngx-select',
  template: `
    <div
      #select_container
      class="ngx-select"
      [class.ngx-select-filled]="ngxFillMode === 'filled'"
      [class.ngx-select-outlined]="ngxFillMode === 'outlined'"
    >
      <label #select_label class="ngx-select-label">{{ label }}</label>
      <input
        #select_input
        class="ngx-select-input"
        [placeholder]="placeholder"
        [value]="value"
        [disabled]="disabled"
        [readonly]="!autocomplete"
        (input)="onInputChange($event)"
      />
      <span style="position: absolute; right: 0px;">
        <svg
          #select_arrow
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
        </svg>
      </span>
    </div>
    <div class="ngx-option-container">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
})
export class SelectComponent
  implements AfterViewInit, ControlValueAccessor, OnChanges
{
  @Input() ngxSize: NgxSize = 'medium';
  @Input() ngxRounded: NgxRounded = 'medium';
  @Input() ngxFillMode: NgxFillMode = 'filled';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input({ transform: booleanAttribute }) autocomplete: boolean = false;

  @ViewChild('select_container') containerRef!: ElementRef;
  @ViewChild('select_label') labelRef!: ElementRef;
  @ViewChild('select_input') inputRef!: ElementRef;
  @ViewChild('select_arrow') arrowRef!: ElementRef;

  onChange: any = () => {};
  onTouched: any = () => {};
  value: any;
  valStatus: boolean = true;
  disabled: boolean = false;
  inputFocus = false;

  constructor(
    public elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
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
      this.moveLabel();
    });
    //Se lanza el evento cuando se desenfoca del input
    this.inputRef.nativeElement.addEventListener('blur', () => {
      this.inputFocus = false;
      this.moveLabel();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxSize']?.currentValue) {
      this.initialize();
      this.moveArrow();
    }
    if (changes['ngxFillMode']?.currentValue) {
      this.initialize();
      this.moveArrow();
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
      this.moveArrow();
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
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  moveLabel() {
    if (this.labelRef) {
      const containerHeight = this.containerRef.nativeElement.offsetHeight;
      if (this.inputFocus || this.value !== '') {
        const top = this.ngxFillMode === 'outlined' ? '-0.375rem ' : '0px';
        this.labelRef.nativeElement.style.top = top;
        this.labelRef.nativeElement.style.fontSize = '0.75rem';
        this.inputRef.nativeElement.placeholder = this.placeholder;
        this.buildBorderOutlined();
      } else {
        const top = `${(containerHeight * 0.333) / 16}rem`;
        this.labelRef.nativeElement.style.top = top;
        this.labelRef.nativeElement.style.fontSize = '1rem';
        this.inputRef.nativeElement.placeholder = '';
        this.drawLineTopBorder();
      }
    }
  }

  moveArrow() {
    if (this.arrowRef) {
      const containerHeight = this.containerRef.nativeElement.offsetHeight;
      const marginTop = `${(containerHeight * 0.282) / 16}rem`;
      this.arrowRef.nativeElement.style.marginTop = marginTop;
    }
  }

  onInputChange(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this.ngControl.control?.setValue(this.value);
  }

  buildBorderOutlined() {
    if (this.ngxFillMode === 'outlined') {
      const formFieldWidth = this.containerRef.nativeElement.offsetWidth;
      const labelWidth = this.labelRef.nativeElement.offsetWidth;
      const percent = ((labelWidth + 10) / formFieldWidth) * 100;
      // let color = this.valid // validacion
      //   ? this.inputFocus // si esta el input con el focus activo coloca el color que le corresponde
      //     ? 'var(--ngx-comp-form-field-filled-border-color)'
      //     : 'currentColor'
      //   : '#F44336';
      const color = '#F44336';
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
}