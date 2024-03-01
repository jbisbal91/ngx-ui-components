import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StylesService {
  constructor() {}

  getStyleValue(elementRef: Element, property: string): string {
    const computedStyle = window.getComputedStyle(elementRef);
    return computedStyle.getPropertyValue(property);
  }

}
