import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-divider-docs',
  templateUrl: './divider-docs.component.html',
})
export class DividerDocsComponent implements OnInit {
  moduleImport = "import { DividerModule } from 'ngx-eagle/divider';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesDivider: Property[] = [];
  variation1DemoDivider!: Tabs[];
  variation2DemoDivider!: Tabs[];
  variation3DemoDivider!: Tabs[];
  variation4DemoDivider!: Tabs[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoDivider = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo1/divider-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo1/divider-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo1/divider-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoDivider = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo2/divider-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo2/divider-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo2/divider-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation3DemoDivider = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo3/divider-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo3/divider-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo3/divider-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation4DemoDivider = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo4/divider-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo4/divider-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo4/divider-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesDivider = [      
      {
        property: '[ngxDashed]',
        description: 'Whether line is dashed',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[ngxColor]',
        description: 'The color of the line and the inner text',
        type: 'string',
        default: '#6b727c',
      },
      {
        property: '[ngxOrientation]',
        description:
          'Inner text orientation',
        type: "'left' | 'center' | 'right'",
        default: 'center',
      },
      {
        property: '[ngxText]',
        description:
          'Inner text of divider',
        type: 'string',
        default: '-',
      },
      {
        property: '[ngxType]',
        description:
          'Direction type of divider',
        type: "'horizontal' | 'vertical'",
        default: 'horizontal',
      },
    ];
  }
}
