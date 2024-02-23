import { Component } from '@angular/core';
import { NgxPosition } from 'ngx-eagle/badge/typings';

@Component({
  selector: 'app-badge-demo1',
  templateUrl: './badge-demo1.component.html',
  styleUrls: ['./badge-demo1.component.scss'],
})
export class BadgeDemo1Component {
  hidden = false;
  badgePosition: NgxPosition = 'before';
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
