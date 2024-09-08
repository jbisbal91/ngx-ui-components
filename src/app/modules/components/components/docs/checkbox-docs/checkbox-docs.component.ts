import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-checkbox-docs',
  templateUrl: './checkbox-docs.component.html',
})
export class CheckboxDocsComponent implements OnInit {
  moduleImport = "import { CheckboxModule } from 'ngx-eagle/checkbox';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesCheckbox: Property[] = [];
  variation1DemoCheckbox!: Tabs[];
  variation2DemoCheckbox!: Tabs[];
  variation3DemoCheckbox!: Tabs[];
  variation4DemoCheckbox!: Tabs[];
  variation5DemoCheckbox!: Tabs[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoCheckbox = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo1/checkbox-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo1/checkbox-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo1/checkbox-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoCheckbox = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo2/checkbox-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo2/checkbox-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo2/checkbox-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoCheckbox = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo3/checkbox-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo3/checkbox-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo3/checkbox-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation4DemoCheckbox = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo4/checkbox-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo4/checkbox-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo4/checkbox-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation5DemoCheckbox = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo5/checkbox-demo5.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo5/checkbox-demo5.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo5/checkbox-demo5.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesCheckbox = [
      {
        property: '[checked]',
        description:
          'Specifies whether the checkbox is selected, double binding',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '(onChecked)',
        description:
          'The callback function that is triggered when the state changes.',
        type: 'EventEmitter<boolean>',
        default: '-',
      },
      {
        property: '[indeterminate]',
        description: 'Set the status of indeterminate, only affect the style',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[ngModel]',
        description:
          'Specifies whether the checkbox is selected, double binding',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '(ngModelChange)',
        description:
          'The callback function that is triggered when the state changes.',
        type: 'EventEmitter<boolean>',
        default: '-',
      },
      {
        property: '[ngxColor]',
        description: 'The color of the checkbox',
        type: 'string',
        default: '#1890FF',
      },
      {
        property: '[ngxSize]',
        description: 'The size of the checkbox',
        type: "'large' | 'small' | 'default' | number",
        default: 'default',
      },
    ];
  }
}
