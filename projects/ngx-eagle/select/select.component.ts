import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { NgxFillMode, NgxRounded, NgxSize } from './typings';

@Component({
  selector: 'ngx-select',
  template: `
    <div
      #select_container
      class="ngx-select"
      [class.ngx-select-sm]="ngxSize === 'small'"
      [class.ngx-select-md]="ngxSize === 'medium'"
      [class.ngx-select-lg]="ngxSize === 'large'"
      [class.ngx-rounded-sm]="ngxRounded === 'small'"
      [class.ngx-rounded-md]="ngxRounded === 'medium'"
      [class.ngx-rounded-lg]="ngxRounded === 'large'"
      [class.ngx-select-filled]="ngxFillMode === 'filled'"
      [class.ngx-select-outlined]="ngxFillMode === 'outlined'"
    >
      <label #select_label class="ngx-select-label">{{ label }}</label>
      <input
        #select_input
        class="ngx-select-input"
        [placeholder]="placeholder"
        (input)="onInputChange($event)"
      />
    </div>
    <div class="ngx-option-container">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
})
export class SelectComponent implements AfterViewInit {
  @Input() ngxSize: NgxSize = 'medium';
  @Input() ngxRounded: NgxRounded = 'medium';
  @Input() ngxFillMode: NgxFillMode = 'filled';
  @Input() label: string = '';
  @Input() placeholder: string = '';

  @ViewChild('select_container') containerRef!: ElementRef;
  @ViewChild('select_label') labelRef!: ElementRef;
  @ViewChild('select_input') inputRef!: ElementRef;

  inputFocus = false;
  inputValue = '';
  constructor(public elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.inputValue = this.inputRef.nativeElement.value;
    this.moveLabel();
    this.placeholder = this.inputRef.nativeElement.placeholder;
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

  moveLabel() {
    if (this.labelRef.nativeElement) {
      const inputHeight = this.inputRef.nativeElement.offsetHeight;
      if (this.inputFocus || this.inputValue !== '') {
        const top = this.ngxFillMode === 'outlined' ? '-0.375rem ' : '0px';
        this.labelRef.nativeElement.style.top = top;
        this.labelRef.nativeElement.style.fontSize = '0.75rem';
        this.inputRef.nativeElement.placeholder = this.placeholder;
        setTimeout(() => {
          if (this.ngxFillMode === 'outlined') {
            this.buildBorderOutlined();
          }
        });
      } else {
        const top = `${(inputHeight * 0.333) / 16}rem`;
        this.labelRef.nativeElement.style.top = top;
        this.labelRef.nativeElement.style.fontSize = '1rem';
        this.inputRef.nativeElement.placeholder = '';
        this.drawLineTopBorder();
      }
    }
  }

  onInputChange(event: Event): void {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  buildBorderOutlined() {
    const formFieldWidth = this.containerRef.nativeElement.offsetWidth;
    const labelWidth = this.labelRef.nativeElement.offsetWidth;
    const percent = ((labelWidth + 10) / formFieldWidth) * 100;
    // let color = this.valid // validacion
    //   ? this.inputFocus // si esta el input con el focus activo coloca el color que le corresponde
    //     ? 'var(--ngx-comp-form-field-filled-border-color)'
    //     : 'currentColor'
    //   : '#F44336';
    const color = '#F44336'
    const background = `linear-gradient(to right, ${color} 5px, transparent 5px, transparent ${percent}%, ${color} ${percent}%) no-repeat top/100% 1px`;
    const borderColor = `transparent ${color} ${color}`;
    this.containerRef.nativeElement.style.borderColor = borderColor;
    this.containerRef.nativeElement.style.background = background;
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
