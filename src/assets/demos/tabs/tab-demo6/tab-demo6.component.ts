import { Component } from '@angular/core';
import { TabPosition } from 'ngx-eagle/tab/typings';

@Component({
  selector: 'app-tab-demo6',
  templateUrl: './tab-demo6.component.html',
  styleUrls: ['./tab-demo6.component.scss']
})
export class TabDemo6Component {
  tabPosition: TabPosition = 'top'
}
