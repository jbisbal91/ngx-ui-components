import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { NgxFillMode, NgxRounded, NgxSize } from './typings';
import { ColorConverter } from 'ngx-eagle/core/services';
import { ColorContrast } from 'ngx-eagle/core/types';

@Directive({
  selector: 'button[ngx-button]',
  host: {
    class: 'ngx-button',
    '[class.ngx-button-sm]': `ngxSize === 'small'`,
    '[class.ngx-button-md]': `ngxSize === 'medium'`,
    '[class.ngx-button-lg]': `ngxSize === 'large'`,
    '[class.ngx-rounded-sm]': `ngxRounded === 'small'`,
    '[class.ngx-rounded-md]': `ngxRounded === 'medium'`,
    '[class.ngx-rounded-lg]': `ngxRounded === 'large'`,
    '[class.ngx-rounded-full]': `ngxRounded === 'full'`,
    '[class.ngx-button-filled]': `ngxFillMode === 'filled'`,
    '[class.ngx-button-outlined]': `ngxFillMode === 'outlined'`,
    '[class.ngx-button-text]': `ngxFillMode === 'text'`,
    '[class.ngx-button-elevated]': `ngxFillMode === 'elevated'`,
  },
  standalone: true,
})
export class ButtonDirective implements OnInit, OnChanges {
  @Input() ngxColor!: ColorContrast | string;
  @Input() ngxSize: NgxSize = 'medium';
  @Input() ngxRounded: NgxRounded = 'medium';
  @Input() ngxFillMode: NgxFillMode = 'elevated';

  backgroundColor: string = '#1890FF';

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private colorConverter: ColorConverter
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('ngxFillMode')) {
      this.setColorByMode(this.backgroundColor);
    }
    if (changes.hasOwnProperty('ngxColor')) {
      if (typeof this.ngxColor === 'object') {
        this.setColorByMode(this.backgroundColor);
      }

      if (typeof this.ngxColor === 'string') {
        this.backgroundColor = changes['ngxColor'].currentValue;
        if (this.backgroundColor) {
          this.setColorByMode(this.backgroundColor);
        }
      }
    }
  }

  ngOnInit(): void {
     //console.log('isRGB', this.colorConverter.isRGB('rgb(255, 256, 0)'));
    // console.log('isRGBA', this.colorConverter.isRGBA('rgba(0,255, 255, 0)'));
    //console.log('isHex', this.colorConverter.isHex('#1E1E1E'));
    console.log('isHSL', this.colorConverter.isHSL('hsl(360, 0%, 0%)'));
    //  console.log('isHSLA', this.colorConverter.isHSLA('hsla(0, 100%, 50%, 0.5)'));
    //  console.log('isHSLA', this.colorConverter.isHSLA('hsla(36, 100%, 50%, 1)'));
    if (!this.ngxColor) {
      this.setColorByMode(this.backgroundColor);
    }
  }

  setColorByMode(color: string) {
    const { backgroundColor, overlayColor } =
      color !== '#1890FF'
        ? this.colorConverter.contrastingColors(color)
        : { backgroundColor: '#1890FF', overlayColor: '#ffffff' };
    switch (this.ngxFillMode) {
      case 'filled':
        this.setColor(backgroundColor, overlayColor, 'transparent');
        break;
      case 'outlined':
        this.setColor('transparent', backgroundColor, backgroundColor);
        break;
      case 'elevated':
        this.setColor(backgroundColor, overlayColor, 'transparent');
        break;
      case 'text':
        this.setColor('transparent', backgroundColor, 'transparent');
        break;
    }
  }

  setColor(backgroundColor: string, color: string, borderColor: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      backgroundColor
    );
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-color',
      borderColor
    );
  }
}
