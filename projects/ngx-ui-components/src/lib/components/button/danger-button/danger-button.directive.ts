import { OnInit, Directive } from '@angular/core';
import { NgxButtonDirective } from '../ngx-button/ngx-button.directive';

@Directive({
  selector: '[ngxDanger]',
  host: {
    class: 'ngx-danger',
  },
})
export class DangerButtonDirective
  extends NgxButtonDirective
  implements OnInit {}
