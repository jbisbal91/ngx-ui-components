import { Directive, OnInit } from '@angular/core';
import { NgxButtonDirective } from '../ngx-button/ngx-button.directive';

@Directive({
  selector: '[ngxGhost]',
  host: {
    class: 'ngx-ghost',
  },
})
export class GhostButtonDirective
  extends NgxButtonDirective
  implements OnInit {}
