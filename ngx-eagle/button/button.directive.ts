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
  @Input() ngxFillMode: NgxFillMode = 'filled';  
  @Input() ngxRounded: NgxRounded = 'medium';
  @Input() ngxSize: NgxSize = 'medium';
  

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private colorConverter: ColorConverter
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('ngxFillMode')) {
      this.setColorByMode(this.ngxColor ? this.ngxColor : '#1890FF');
    }

    if (changes.hasOwnProperty('ngxColor')) {
      this.setColorByMode(this.ngxColor);
    }
  }

  ngOnInit(): void {
    if (!this.ngxColor) {
      this.setColorByMode('#1890FF');
    }
  }

  setColorByMode(color: ColorContrast | string) {
    var colorContrast!: ColorContrast;
    if (typeof color === 'string') {
      colorContrast =
        color !== '#1890FF'
          ? this.colorConverter.contrastingColors(color)
          : { backgroundColor: '#1890FF', overlayColor: '#ffffff' };
    }

    if (typeof color === 'object') {
      colorContrast = color;
    }

    switch (this.ngxFillMode) {
      case 'filled':
        this.setColor(
          colorContrast.backgroundColor,
          colorContrast.overlayColor,
          'transparent'
        );
        break;
      case 'outlined':
        this.setColor(
          'transparent',
          colorContrast.backgroundColor,
          colorContrast.backgroundColor
        );
        break;
      case 'elevated':
        this.setColor(
          colorContrast.backgroundColor,
          colorContrast.overlayColor,
          'transparent'
        );
        break;
      case 'text':
        this.setColor(
          'transparent',
          colorContrast.backgroundColor,
          'transparent'
        );
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
