import { Component } from '@angular/core';
import { NgxDrawerPlacement } from 'projects/ngx-eagle/drawer/typings';

@Component({
  selector: 'app-drawer-demo1',
  templateUrl: './drawer-demo1.component.html',
  styleUrls: ['./drawer-demo1.component.scss'],
})
export class DrawerDemo1Component {
  visible:boolean = false;
  ngxPlacement:NgxDrawerPlacement = 'left';
  openDrawer() {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  ngxVisibleChange(event:boolean){
    this.visible = event;
  }
}
