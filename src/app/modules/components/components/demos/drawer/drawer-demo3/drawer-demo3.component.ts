import { Component } from '@angular/core';
import { NgxDrawerPlacement } from 'ngx-eagle/drawer/typings';

@Component({
  selector: 'app-drawer-demo3',
  templateUrl: './drawer-demo3.component.html',
  styleUrls: ['./drawer-demo3.component.scss'],
})
export class DrawerDemo3Component {
  visible = false;
  ngxPlacement: NgxDrawerPlacement = 'right';
  openDrawer() {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
