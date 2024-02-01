import { Component } from '@angular/core';

@Component({
  selector: 'ngx-table',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'ngx-table',
  },
  standalone: true,
})
export class TableComponent {}
