import { Component } from '@angular/core';
import { DrawerPlacement } from 'ngx-eagle/drawer/typings';

@Component({
  selector: 'app-drawer-demo3',
  templateUrl: './drawer-demo3.component.html',
  styleUrls: ['./drawer-demo3.component.scss'],
})
export class DrawerDemo3Component {
  visible = false;
  placement: DrawerPlacement = 'right';
  openDrawer() {
    this.visible = true;
  }
}
