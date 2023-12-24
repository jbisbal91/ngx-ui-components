import { Directive, OnInit } from '@angular/core';
import { NgxButtonDirective } from '../ngx-button/ngx-button.directive';

@Directive({
  selector: '[ngxBlock]',
  host: {
    class: 'ngx-block',
  },
})
export class BlockButtonDirective
  extends NgxButtonDirective
  implements OnInit {}
