import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-input-docs',
  templateUrl: './input-docs.component.html',
})
export class InputDocsComponent implements OnInit {
  moduleImport = "import { InputModule } from 'ngx-eagle/input';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesInput: Property[] = [];
  variation1DemoInput!: Tabs[];
  variation2DemoInput!: Tabs[];
  variation3DemoInput!: Tabs[];
  variation4DemoInput!: Tabs[];
  variation5DemoInput!: Tabs[];
  variation6DemoInput!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoInput = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo1/input-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo1/input-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo1/input-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoInput = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo2/input-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo2/input-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo2/input-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoInput = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo3/input-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo3/input-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo3/input-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation4DemoInput = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo4/input-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo4/input-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo4/input-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation5DemoInput = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo5/input-demo5.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo5/input-demo5.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo5/input-demo5.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation6DemoInput = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo6/input-demo6.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo6/input-demo6.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo6/input-demo6.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesInput = [
      {
        property: '[prefix]',
        description: 'The prefix for the Input, can work with [prefix]',
        type: 'any | TemplateRef<void>',
        default: '-',
      },
      {
        property: '[suffix]',
        description: 'The suffix for the Input, can work with [suffix]',
        type: 'any | TemplateRef<void>',
        default: '-',
      },
      {
        property: '[type]',
        description: 'To set the input type to a <input>',
        type: "'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url' | 'textarea'",
        default: 'text',
      },
    ];
  }
}
