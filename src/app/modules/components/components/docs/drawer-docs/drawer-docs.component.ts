import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-drawer-docs',
  templateUrl: './drawer-docs.component.html',
})
export class DrawerDocsComponent implements OnInit {
  moduleImport = "import { DrawerModule } from 'ngx-eagle/drawer';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesDrawer: Property[] = [];
  propertiesDrawerService: Property[] = [];
  variation1DemoDrawer!: Tabs[];
  variation2DemoDrawer!: Tabs[];
  variation3DemoDrawer!: Tabs[];
  variation4DemoDrawer!: Tabs[];
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

    this.variation2DemoDrawer = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/drawer/drawer-demo2/drawer-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/drawer/drawer-demo2/drawer-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/drawer/drawer-demo2/drawer-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation3DemoDrawer = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/drawer/drawer-demo3/drawer-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/drawer/drawer-demo3/drawer-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/drawer/drawer-demo3/drawer-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation4DemoDrawer = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/drawer/drawer-demo4/drawer-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/drawer/drawer-demo4/drawer-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/drawer/drawer-demo4/drawer-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];


    this.propertiesDrawer = [
      {
        property: '[backdrop]',
        description: 'Whether to show backdrop or not.',
        type: 'boolean',
        default: 'true',
      },
      {
        property: '[backdropClosable]',
        description:
          'Clicking on the backdrop (area outside the Drawer) to close the Drawer or not.',
        type: 'boolean',
        default: 'true',
      },
      {
        property: '[placement]',
        description: 'The placement of the Drawer.',
        type: "'top' | 'right' | 'bottom' | 'left'",
        default: 'left',
      },
      {
        property: '[(visible)]',
        description:
          'Whether the Drawer dialog is visible or not, you can use [(ngxVisible)] two-way binding',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '(visibleChange)',
        description:
          'The callback function that is triggered when the state changes.',
        type: 'EventEmitter<boolean>',
        default: '-',
      },
      {
        property: 'closeMobile',
        description:'Whether to close the Drawer dialog on mobile devices or not.',
        type: 'boolean',
        default: 'false',
      },
      {
        property: 'closeDesktop',
        description:'Whether to close the Drawer dialog on desktop devices or not.',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '(onOpen)',
        description:'The callback function that is triggered when the Drawer dialog is opened.',
        type: 'EventEmitter<void>',
        default: '-',
      },
      {
        property: '(onClose)',
        description:'The callback function that is triggered when the Drawer dialog is closed.',
        type: 'EventEmitter<void>',
        default: '-',
      },
    ];

    this.propertiesDrawerService = [
      {
        property: 'open()',
        description: 'Open the Drawer dialog.',
        type: 'void',
        default: '-',
      },
      {
        property: 'closeAll()',
        description: 'Close all Drawer dialogs.',
        type: 'void',
        default: '-',
      },
    ];
  }
}
