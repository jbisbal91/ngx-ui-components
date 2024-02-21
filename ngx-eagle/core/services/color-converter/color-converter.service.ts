import { Injectable } from '@angular/core';
import { ColorContrast, HSL, RGB } from 'ngx-eagle/core/types';

@Injectable({
  providedIn: 'root',
})
export class ColorConverter {
  constructor() {}

  public isRGB(rgb: any): boolean {
    if (!rgb) throw new TypeError(`Invalid argument; has no value.`);
    const regex =
      /^rgb\(\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*,\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*,\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*\)$/;
    return regex.test(rgb);
  }

  contrastingColors(color: string): ColorContrast {
    const getContrastColor = (color: string) => {
      const { r, g, b } = this.hexToRgb(color);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminance > 0.5
        ? this.changeRgbLuminance(this.hexToRgb(color), 0.35)
        : '#ffffff';
    };
    const backgroundColor = color;
    const overlayColor = getContrastColor(color);
    return { backgroundColor: backgroundColor, overlayColor: overlayColor };
  }

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

  changeRgbLuminance(rgb: RGB, luminance: number): string {
    const newR = Math.max(0, Math.floor(rgb.r * luminance));
    const newG = Math.max(0, Math.floor(rgb.g * luminance));
    const newB = Math.max(0, Math.floor(rgb.b * luminance));
    return `rgb(${newR},${newG},${newB})`;
  }
}
