import { Directive } from '@angular/core';

@Directive({
  selector: '[ngx-card-image]',
  host: {
    class: 'ngx-card-image',
  },
})
export class CardImageDirective {}
