import { Component } from '@angular/core';
import { NgxPosition } from 'ngx-eagle/badge';

@Component({
  selector: 'app-badge-demo5',
  templateUrl: './badge-demo5.component.html',
  styleUrls: ['./badge-demo5.component.scss'],
})
export class BadgeDemo5Component {
  badgePosition: NgxPosition = 'before';
}
