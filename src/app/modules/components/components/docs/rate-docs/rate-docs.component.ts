import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-rate-docs',
  templateUrl: './rate-docs.component.html',
})
export class RateDocsComponent implements OnInit {
  moduleImport = "import { RateModule } from 'ngx-eagle/rate';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesRate: Property[] = [];
  variation1DemoRate!: Tabs[];
  variation2DemoRate!: Tabs[];
  variation3DemoRate!: Tabs[];
  variation4DemoRate!: Tabs[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoRate = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo1/rate-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo1/rate-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo1/rate-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoRate = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo2/rate-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo2/rate-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo2/rate-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoRate = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo3/rate-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo3/rate-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo3/rate-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation4DemoRate = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo4/rate-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo4/rate-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo4/rate-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesRate = [      
      {
        property: '[ngxAllowClear]',
        description: 'Whether to allow clear when click again',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[ngxColor]',
        description: 'The color of the star',
        type: 'string',
        default: '#FFA600',
      },
      {
        property: '[ngModel]',
        description:
          'Current value , double binding',
        type: 'number',
        default: '-',
      },
      {
        property: '(ngModelChange)',
        description:
          'Callback when select value',
        type: 'EventEmitter<boolean>',
        default: '-',
      },
    ];
  }
}
