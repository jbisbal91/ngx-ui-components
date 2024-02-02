import { Component } from '@angular/core';

@Component({
  selector: 'ngx-avatar-group',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'ngx-avatar-group',
  },
  standalone: true,
})
export class AvatarGroupComponent {}
