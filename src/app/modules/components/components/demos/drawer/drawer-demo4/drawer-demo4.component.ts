import { Component } from '@angular/core';
import { Drawer } from 'ngx-eagle/drawer';
import { DrawerRef4Component } from './drawer-ref4.component';

@Component({
  selector: 'app-drawer-demo4',
  templateUrl: './drawer-demo4.component.html',
  styleUrls: ['./drawer-demo4.component.scss']
})
export class DrawerDemo4Component {


  constructor(private drawer: Drawer) { }

  openDrawer() {
    this.drawer.open(DrawerRef4Component,{
      placement: 'left',
      closeDesktop: true,
      onOpen() {
        console.log('Drawer opened');
      },
      onClose() {
        console.log('Drawer closed');
      }
    });
  }
}
