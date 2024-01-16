import { Component } from '@angular/core';

@Component({
  selector: 'ngx-card',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'ngx-card',
  },
  standalone: true,
})
export class CardComponent {}
