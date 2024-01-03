import { Directive } from '@angular/core';
import { ButtonDirective } from '../button/button.directive';

@Directive({
  selector: '[ngxDanger]',
  host: {
    class: 'ngx-danger',
  },
  standalone: true,
})
export class DangerButtonDirective extends ButtonDirective {}
