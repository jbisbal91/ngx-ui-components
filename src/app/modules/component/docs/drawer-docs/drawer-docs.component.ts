import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';

@Component({
  selector: 'app-drawer-docs',
  templateUrl: './drawer-docs.component.html',
})
export class DrawerDocsComponent implements OnInit {
  variation1DemoDrawer!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoDrawer = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/drawer/drawer-demo1/drawer-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/drawer/drawer-demo1/drawer-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/drawer/drawer-demo1/drawer-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
