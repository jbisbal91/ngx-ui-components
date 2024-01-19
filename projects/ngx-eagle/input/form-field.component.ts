import { Component, Input } from '@angular/core';
import { NgxFillMode, NgxRounded, NgxSize } from './typings';

@Component({
  selector: 'ngx-form-field',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'ngx-form-field',
    '[class.ngx-form-field-sm]': `ngxSize === 'small'`,
    '[class.ngx-form-field-md]': `ngxSize === 'medium'`,
    '[class.ngx-form-field-lg]': `ngxSize === 'large'`,
    '[class.ngx-rounded-sm]': `ngxRounded === 'small'`,
    '[class.ngx-rounded-md]': `ngxRounded === 'medium'`,
    '[class.ngx-rounded-lg]': `ngxRounded === 'large'`,
    '[class.ngx-rounded-full]': `ngxRounded === 'full'`,
    '[class.ngx-form-field-filled]': `ngxFillMode === 'filled'`,
    '[class.ngx-form-field-outlined]': `ngxFillMode === 'outlined'`,
  },
  standalone: true,
})
export class FormFieldComponent {
  @Input() ngxSize: NgxSize = 'medium';
  @Input() ngxRounded: NgxRounded = 'full';
  @Input() ngxFillMode: NgxFillMode = 'filled';
}
