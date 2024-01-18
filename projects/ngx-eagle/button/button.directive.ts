import { Directive, Input } from '@angular/core';
import { NgxFillMode, NgxRounded, NgxSize } from './typings';

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
export class ButtonDirective {
  @Input() ngxSize: NgxSize = 'medium';
  @Input() ngxRounded: NgxRounded = 'medium';
  @Input() ngxFillMode: NgxFillMode = 'elevated';
}
