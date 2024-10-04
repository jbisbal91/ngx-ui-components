import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-demo5',
  templateUrl: './tab-demo5.component.html',
  styleUrls: ['./tab-demo5.component.scss']
})
export class TabDemo5Component {
  tabs = [
    {
      name: 'Tab 1',
      disabled: false,
    },
    {
      name: 'Tab 2',
      disabled: true,
    },
    {
      name: 'Tab 3',
      disabled: false,
    },
  ];
}
