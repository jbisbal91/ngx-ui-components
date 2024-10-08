import { Component } from '@angular/core';
import { DrawerPlacement } from 'ngx-eagle/drawer/typings';

@Component({
  selector: 'app-drawer-demo1',
  templateUrl: './drawer-demo1.component.html',
  styleUrls: ['./drawer-demo1.component.scss'],
})
export class DrawerDemo1Component {
  ngxVisible: boolean = false;
  ngxPlacement: DrawerPlacement = 'right';

  openDrawer() {
    this.ngxVisible = true;
  }
}
