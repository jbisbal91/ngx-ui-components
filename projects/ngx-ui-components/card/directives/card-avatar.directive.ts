import { Directive } from '@angular/core';

@Directive({
  selector: '[ngx-card-avatar]',
  host: {
    class: 'ngx-card-avatar',
  },
})
export class CardAvatarDirective {}
