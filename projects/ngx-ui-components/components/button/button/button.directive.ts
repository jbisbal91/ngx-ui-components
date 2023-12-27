import { Directive, Input } from '@angular/core';

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
})
export class ButtonDirective {
  @Input() ngxType: 'primary' | 'default' | 'dashed' | 'text' | 'link' =
    'default';
  disabled: boolean = false;
}
