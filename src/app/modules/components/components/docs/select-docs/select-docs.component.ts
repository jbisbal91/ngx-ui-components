import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-select-docs',
  templateUrl: './select-docs.component.html',
})
export class SelectDocsComponent implements OnInit {
  moduleImport = "import { SelectModule } from 'ngx-eagle/select';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesSelect: Property[] = [];
  propertiesOption: Property[] = [];
  variation1DemoSelect!: Tabs[];
  variation2DemoSelect!: Tabs[];
  variation3DemoSelect!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoSelect = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo1/select-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo1/select-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo1/select-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoSelect = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo2/select-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo2/select-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo2/select-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoSelect = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo3/select-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo3/select-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo3/select-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesSelect = [
      {
        property: '[autocomplete]',
        description: 'Allows you to search in the options',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[multiple]',
        description: 'Allows multiple selection',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[ngModel]',
        description: 'Input value to component, double binding',
        type: "string' | 'number' | '{ label: any, value: string | number }'",
        default: '-',
      },
      {
        property: '[prefix]',
        description: 'The prefix for the Select, can work with [prefix]',
        type: 'any | TemplateRef<void>',
        default: '-',
      },
      {
        property: '[suffix]',
        description: 'The suffix for the Select, can work with [suffix]',
        type: 'any | TemplateRef<void>',
        default: '-',
      },
      {
        property: '[value]',
        description: 'Input value to component',
        type: "'string' | 'number' | '{ label: any, value: string | number }'",
        default: '-',
      },
      {
        property: '(onChangeValue)',
        description: 'The callback function that is triggered when the value changes.',
        type: "EventEmitter<any>",
        default: '-',
      },
    ];

    this.propertiesOption = [
      {
        property: '[selected]',
        description: 'Mark the option as selected',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[value]',
        description: 'It is not shown visually, it is the id of the options',
        type: "'string' | 'number'",
        default: '-',
      },
    ];
  }
}
