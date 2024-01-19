import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgxFillMode, NgxRounded, NgxSize } from './typings';
import { InputService } from './service/input.service';
import { Subscription } from 'rxjs';

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
    '[class.ngx-rounded-full]': `ngxRounded === 'full' && ngxFillMode === 'outlined'`,
    '[class.ngx-form-field-filled]': `ngxFillMode === 'filled'`,
    '[class.ngx-form-field-outlined]': `ngxFillMode === 'outlined'`,
  },
  standalone: true,
  providers: [InputService],
})
export class FormFieldComponent {
  @Input() ngxSize: NgxSize = 'medium';
  @Input() ngxRounded: NgxRounded = 'full';
  @Input() ngxFillMode: NgxFillMode = 'filled';
}
