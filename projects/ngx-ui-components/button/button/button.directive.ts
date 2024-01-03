import { Directive, Input } from '@angular/core';

export type NgxType = 'primary' | 'default' | 'dashed' | 'text' | 'link';

@Directive({
  selector: '[ngx-button]',
  host: {
    class: 'ngx-button',
    '[class.ngx-button-primary]': 'ngxType === "primary"',
    '[class.ngx-button-default]': 'ngxType === "default"',
    '[class.ngx-button-dashed]': 'ngxType === "dashed"',
    '[class.ngx-button-text]': 'ngxType === "text"',
    '[class.ngx-button-link]': 'ngxType === "link"',
  },
  standalone:true
})
export class ButtonDirective {
  @Input() ngxType: NgxType = 'primary';
  disabled: boolean = false;
}
