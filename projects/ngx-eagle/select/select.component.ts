import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
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
import { NgIf } from '@angular/common';
import { ReplaySubject } from 'rxjs';

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

const ngxRoundedOptContMap = {
  small: '0px 0px 2px 2px',
  medium: '0px 0px 4px 4px',
  large: '0px 0px 6px 6px',
};

@Component({
  selector: 'ngx-select',
  template: `
    <div class="ngx-field-form-select" #field_form_select>
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
        <span class="ngx-select-arrow">
          <svg
            #select_arrow
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M7 10L12 15L17 10H7Z" fill="black" />
          </svg>
        </span>
      </div>
      <div
        *ngIf="isOpenDropdown && !disabled"
        #option_container
        class="ngx-option-container"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
  standalone: true,
  imports: [NgIf],
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

  @ViewChild('field_form_select') selectRef!: ElementRef;
  @ViewChild('select_container') containerRef!: ElementRef;
  @ViewChild('select_label') labelRef!: ElementRef;
  @ViewChild('select_input') inputRef!: ElementRef;
  @ViewChild('select_arrow') arrowRef!: ElementRef;
  @ViewChild('option_container') optContRef!: ElementRef;

  readonly containerRef$ = new ReplaySubject<ElementRef>();
  readonly inputRef$ = new ReplaySubject<ElementRef>();

  onChange: any = () => {};
  onTouched: any = () => {};
  value: any;
  valStatus: boolean = true;
  disabled: boolean = false;
  inputFocus = false;

  isOpenDropdown: boolean = false;

  constructor(
    public elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngAfterViewInit(): void {
    this.initialize();
    //Se lanza el evento cuando se esta haciendo focus en el input
    this.inputRef.nativeElement.addEventListener('focus', () => {
      this.inputFocus = true;
      this.moveLabel();
    });
    //Se lanza el evento cuando se desenfoca del input
    this.inputRef.nativeElement.addEventListener('blur', () => {
      this.inputFocus = false;
      if (!this.isOpenDropdown) {
        this.moveLabel();
      }
    });
  }

  openDropdown(isOpenDropdown: boolean) {
    setTimeout(() => {
      if (isOpenDropdown) {
        this.isOpenDropdown = this.isOpenDropdown ? false : true;
      } else {
        this.isOpenDropdown = isOpenDropdown;
      }
      if (this.optContRef) {
        this.optContRef.nativeElement.style.borderRadius =
          ngxRoundedOptContMap[this.ngxRounded];
      }
      if (this.ngxFillMode === 'outlined') {
        this.containerRef.nativeElement.style.borderRadius = this.isOpenDropdown
          ? ngxRoundedfilledMap[this.ngxRounded]
          : ngxRoundedOutlinedMap[this.ngxRounded];
      }
    }, 100);
  }

  @HostListener('document:mousedown', ['$event'])
  clickout(event: any): void {
    this.openDropdown(this.selectRef.nativeElement.contains(event.target));
    this.value = this.inputRef.nativeElement.value; // se actualiza el valor dependiendo del valor que fue selecionado en el dropdown
    this.moveLabel();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initialize();
    this.moveArrow();
    this.cdr.markForCheck();
  }

  initialize(): void {
    setTimeout(() => {
      this.ngControl.control?.setValue(this.value);
      this.containerRef.nativeElement.style.height = ngxSizeMap[this.ngxSize];
      this.containerRef$.next(this.containerRef);
      this.inputRef$.next(this.inputRef);
      this.containerRef.nativeElement.style.borderRadius =
        this.ngxFillMode === 'outlined'
          ? ngxRoundedOutlinedMap[this.ngxRounded]
          : ngxRoundedfilledMap[this.ngxRounded];
      this.labelRef.nativeElement.style.position = 'absolute';
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

  moveLabel(): void {
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

  moveArrow(): void {
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

  buildBorderOutlined(): void {
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

  drawLineTopBorder(): void {
    const background =
      this.ngxFillMode === 'outlined'
        ? 'linear-gradient(to right, transparent 0%, currentColor 0%) no-repeat top/100% 1px'
        : 'none';
    const borderColor = `transparent currentColor currentColor`;
    this.containerRef.nativeElement.style.borderColor = borderColor;
    this.containerRef.nativeElement.style.background = background;
  }
}
