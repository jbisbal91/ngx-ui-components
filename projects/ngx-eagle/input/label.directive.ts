import { Directive } from '@angular/core';

@Directive({
  selector: 'label[ngx-label]',
  host: {
    class: 'ngx-label',
  },
  standalone: true,
})
export class LabelDirective {}
