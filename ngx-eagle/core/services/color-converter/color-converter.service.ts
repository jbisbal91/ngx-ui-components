import { ElementRef, Injectable } from '@angular/core';
import { ColorContrast, HSL, RGB, PresetColors } from 'ngx-eagle/core/types';

@Injectable({
  providedIn: 'root',
})
export class ColorConverter {
  constructor() {}

  //--------------START VALIDATIONS ------------------
  public isHex(hex: string): boolean {
    if (!hex) throw new TypeError(`Invalid argument; has no value.`);
    const regex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
    return regex.test(hex);
  }

  public isRGB(rgb: string): boolean {
    if (!rgb) throw new TypeError(`Invalid argument; has no value.`);
    const regex =
      /^rgb\(\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*,\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*,\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*\)$/;
    return regex.test(rgb);
  }

  public isRGBA(rgba: string): boolean {
    if (!rgba) throw new TypeError(`Invalid argument; has no value.`);
    const regex =
      /^rgba\(\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|0)\s*,\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|0)\s*,\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|0)\s*,\s*((1(\.0)?)|0(\.\d+)?)\s*\)$/;
    return regex.test(rgba);
  }

  public isHSL(hsl: string): boolean {
    if (!hsl) throw new TypeError(`Invalid argument; has no value.`);
    const regex =
      /^hsl\(\s*((\d{1,2}|[1-2]\d{2}|3[0-5]\d)|360)\s*,\s*(\d{1,2}|100)%\s*,\s*(\d{1,2}|100)%\s*\)$/;
    return regex.test(hsl);
  }

  public isHSLA(hsla: string): boolean {
    if (!hsla) throw new TypeError(`Invalid argument; has no value.`);
    const regex =
      /^hsla\(\s*((\d{1,2}|[1-2]\d{2}|3[0-5]\d)|360)\s*,\s*(\d{1,2}|100)%\s*,\s*(\d{1,2}|100)%\s*,\s*(0?\.\d+|1(\.0)?)\s*\)$/;
    return regex.test(hsla);
  }
  //--------------END VALIDATIONS ------------------

  contrastingColors(color: string): ColorContrast {
    const getContrastColor = (color: string) => {
      const luminance = this.luminance(this.hexToRgb(color));
      return luminance > 0.5
        ? this.changeRgbLuminance(this.hexToRgb(color), 0.35)
        : '#ffffff';
    };
    const backgroundColor = color;
    const overlayColor = getContrastColor(color);
    return { backgroundColor: backgroundColor, overlayColor: overlayColor };
  }

  changeRgbLuminance(rgb: RGB, luminance: number): string {
    const newR = Math.max(0, Math.floor(rgb.r * luminance));
    const newG = Math.max(0, Math.floor(rgb.g * luminance));
    const newB = Math.max(0, Math.floor(rgb.b * luminance));
    return `rgb(${newR},${newG},${newB})`;
  }

  luminance(color: RGB) {
    return (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / 255;
  }

  //------------- TO RGB -------------
  hexToRgb(hex: string): RGB {
    let hexCode = hex.startsWith('#') ? hex.slice(1) : hex;
    if (hexCode.length === 3) {
      hexCode = hexCode
        .split('')
        .map((char) => char + char)
        .join('');
    }
    const bigint = parseInt(hexCode, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }
  //------------- END -------------
  //------------- TO HSL -------------
  hexToHsl(hex: string): HSL {
    const r = parseInt(hex.substring(1, 3), 16) / 255;
    const g = parseInt(hex.substring(3, 5), 16) / 255;
    const b = parseInt(hex.substring(5, 7), 16) / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const l = (min + max) / 2;
    let s = 0;
    if (min !== max) {
      s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
    }
    let h = 0;
    if (min !== max) {
      if (max === r) {
        h = (g - b) / (max - min);
      } else if (max === g) {
        h = 2 + (b - r) / (max - min);
      } else {
        h = 4 + (r - g) / (max - min);
      }
    }
    h *= 60;
    if (h < 0) {
      h += 360;
    }
    return { h, s: s * 100, l: l * 100 };
  }
  //------------- END -------------
  //------------- TO HEX -------------
  rgbToHex(rgbString: string): string {
    const rgbMatch = rgbString.match(
      /^rgb\(\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*,\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*,\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*\)$/
    );
    if (!rgbMatch) {
      throw new Error('Incorrect RGB color format.');
    }
    const [, r, g, b] = rgbMatch.map(Number);
    return `#${r.toString(16).padStart(2, '0')}${g
      .toString(16)
      .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }

  nameSVGToHex(name: any) {
    const response = PresetColors[name.toLowerCase()];
    if (response) {
      return PresetColors[name.toLowerCase()];
    }
    throw new Error('Wrong color name');
  }
  //------------- END -------------

  getPropertyValue(elementRef: ElementRef, property: string) {
    const computedStyle = window.getComputedStyle(elementRef.nativeElement);
    return computedStyle.getPropertyValue(property);
  }
}
