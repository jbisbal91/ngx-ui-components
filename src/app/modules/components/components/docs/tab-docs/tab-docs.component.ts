import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-tab-docs',
  templateUrl: './tab-docs.component.html',
})
export class TabDocsComponent implements OnInit {
  moduleImport = "import { TabModule } from 'ngx-eagle/tab';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesTabGroup: Property[] = [];
  propertiesTab: Property[] = [];
  variation1DemoTabs!: Tabs[];
  variation2DemoTabs!: Tabs[];
  variation3DemoTabs!: Tabs[];
  variation4DemoTabs!: Tabs[];
  variation5DemoTabs!: Tabs[];
  variation6DemoTabs!: Tabs[];
  variation7DemoTabs!: Tabs[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoTabs = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo1/tab-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo1/tab-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo1/tab-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoTabs = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo2/tab-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo2/tab-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo2/tab-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoTabs = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo3/tab-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo3/tab-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo3/tab-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation4DemoTabs = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo4/tab-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo4/tab-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo4/tab-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation5DemoTabs = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo5/tab-demo5.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo5/tab-demo5.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo5/tab-demo5.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation6DemoTabs = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo6/tab-demo6.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo6/tab-demo6.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo6/tab-demo6.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation7DemoTabs = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo7/tab-demo7.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo7/tab-demo7.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo7/tab-demo7.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesTabGroup = [
      {
        property: '[ngxAlignTabs]',
        description: 'Align of tabs',
        type: "'start' | 'center' | 'end'",
        default: 'start',
      },
      {
        property: '[ngxMode]',
        description: 'Way to show tabs',
        type: "'default' | 'closeable'",
        default: 'default',
      },
      {
        property: '[ngxSelectedIndex]',
        description:
          "Current tab's index, [(ngxSelectedIndex)] two-way binding",
        type: 'number',
        default: '0',
      },
      {
        property: '[ngxTabPosition]',
        description: 'Position of tabs',
        type: "'top' | 'left' | 'right'",
        default: 'top',
      },
      {
        property: '(ngxSelectedIndexChange)',
        description: "Current tab's index change callback",
        type: 'EventEmitter<number>',
        default: '-',
      },
    ];

    this.propertiesTab = [
      {
        property: '[disabled]',
        description: 'Disabled tabs',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[label]',
        description: "Show text in tab's head",
        type: 'string',
        default: '-',
      },
    ];
  }
}
