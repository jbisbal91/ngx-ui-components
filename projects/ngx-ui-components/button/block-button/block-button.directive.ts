import { Directive } from '@angular/core';
import { ButtonDirective } from '../button/button.directive';

@Directive({
  selector: '[ngxBlock]',
  host: {
    class: 'ngx-block',
  },
  standalone: true,
})
export class BlockButtonDirective extends ButtonDirective {}
