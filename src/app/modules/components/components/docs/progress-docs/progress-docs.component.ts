import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-progress-docs',
  templateUrl: './progress-docs.component.html',
})
export class ProgressDocsComponent implements OnInit {
  moduleImport = "import { ProgressModule } from 'ngx-eagle/progress';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesProgress: Property[] = [];
  variation1DemoProgress!: Tabs[];
  variation2DemoProgress!: Tabs[];
  variation3DemoProgress!: Tabs[];
  variation4DemoProgress!: Tabs[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoProgress = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo1/progress-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo1/progress-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo1/progress-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation2DemoProgress = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo2/progress-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo2/progress-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo2/progress-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation3DemoProgress = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo3/progress-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo3/progress-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo3/progress-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation4DemoProgress = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo4/progress-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo4/progress-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo4/progress-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesProgress = [
      {
        property: '[ngxColor]',
        description: 'The color of the progress bar',
        type: 'string',
        default: '#1890FF',
      },
      {
        property: '[ngxPercent]',
        description: 'Progress bar percentage',
        type: 'number',
        default: '0',
      },
      {
        property: '[ngxSize]',
        description: 'The size of the progress bar',
        type: "'large' | 'small' | 'default'",
        default: 'default',
      },
      {
        property: '[ngxTimer]',
        description: 'Progress bar time',
        type: 'number',
        default: '0.5',
      },
      {
        property: '[ngxType]',
        description: 'Progress bar type',
        type: "'line' | 'circle'",
        default: 'line',
      },
      {
        property: '[template]',
        description: 'Content template',
        type: 'TemplateRef<void>',
        default: '-',
      },
    ];
  }
}
