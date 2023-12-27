import { Directive } from '@angular/core';
import { ButtonDirective } from '../button/button.directive';

@Directive({
  selector: '[ngxGhost]',
  host: {
    class: 'ngx-ghost',
  },
})
export class GhostButtonDirective extends ButtonDirective {}
