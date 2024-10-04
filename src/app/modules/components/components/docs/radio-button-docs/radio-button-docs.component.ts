import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-radio-button-docs',
  templateUrl: './radio-button-docs.component.html',
})
export class RadioButtonDocsComponent implements OnInit {
  moduleImport = "import { RadioButtonModule } from 'ngx-eagle/radio-button';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesRadioButton: Property[] = [];
  propertiesRadioGroup: Property[] = [];
  variation1DemoRadioButton!: Tabs[];
  variation2DemoRadioButton!: Tabs[];
  variation3DemoRadioButton!: Tabs[];
  variation4DemoRadioButton!: Tabs[];
  variation5DemoRadioButton!: Tabs[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoRadioButton = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo1/radio-button-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo1/radio-button-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo1/radio-button-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation2DemoRadioButton = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo2/radio-button-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo2/radio-button-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo2/radio-button-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation3DemoRadioButton = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo3/radio-button-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo3/radio-button-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo3/radio-button-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation4DemoRadioButton = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo4/radio-button-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo4/radio-button-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo4/radio-button-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation5DemoRadioButton = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo5/radio-button-demo5.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo5/radio-button-demo5.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio-button/radio-button-demo5/radio-button-demo5.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesRadioButton = [
      {
        property: '[checked]',
        description: 'Specifies whether the radio button is selected',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[ngxColor]',
        description: 'The color of the radio button',
        type: 'string',
        default: '#1890FF',
      },
      {
        property: '[ngxSize]',
        description: 'The size of the radio button',
        type: "'large' | 'small' | 'default' | number",
        default: 'default',
      },
      {
        property: '[ngxValue]',
        description: 'Use with ngx-radio-group',
        type: 'any',
        default: '-',
      },
      {
        property: '[ngModel]',
        description:
          'Specifies whether the radio button is selected, double binding',
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
    ];

    this.propertiesRadioGroup = [
      {
        property: '[ngModel]',
        description:
          'Current selected ngx-radio-button value, double binding',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '(ngModelChange)',
        description:
          'The callback function when current selected ngx-radio-button value change',
        type: 'EventEmitter<boolean>',
        default: '-',
      },
    ];
  }
}
