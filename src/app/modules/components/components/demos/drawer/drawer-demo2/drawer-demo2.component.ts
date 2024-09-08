import { Component } from '@angular/core';
import { NgxDrawerPlacement } from 'ngx-eagle/drawer/typings';

@Component({
  selector: 'app-drawer-demo2',
  templateUrl: './drawer-demo2.component.html',
  styleUrls: ['./drawer-demo2.component.scss'],
})
export class DrawerDemo2Component {
  visible:boolean = false;
  ngxPlacement:NgxDrawerPlacement = 'left';
  
  openDrawer() {
    this.visible = true;
  }
}
