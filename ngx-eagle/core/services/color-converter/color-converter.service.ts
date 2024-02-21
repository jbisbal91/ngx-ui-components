import { Injectable } from '@angular/core';
import { ColorContrast, RGB } from 'ngx-eagle/core/types';

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
        ? this.changeRgbLuminance(this.hexToRgb(color), 0.4)
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

  changeRgbLuminance(rgb: RGB, luminance: number): string {
    const newR = Math.min(255, Math.max(0, rgb.r * luminance));
    const newG = Math.min(255, Math.max(0, rgb.g * luminance));
    const newB = Math.min(255, Math.max(0, rgb.b * luminance));
    return `rgb(${newR},${newG},${newB})`;
  }
}
