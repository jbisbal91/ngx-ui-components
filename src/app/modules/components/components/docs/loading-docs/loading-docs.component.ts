import { Component, OnInit } from '@angular/core';
import { Property } from '../../interfaces/property.interface';
import { HttpClient } from '@angular/common/http';
import { Tabs } from '../../interfaces/tabs.interface';

@Component({
  selector: 'app-loading-docs',
  templateUrl: './loading-docs.component.html'
})
export class LoadingDocsComponent implements OnInit {
  moduleImport = "import { LoadingModule } from 'ngx-eagle/loading';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesLoading: Property[] = [];
  variation1DemoLoading!: Tabs[];
  variation2DemoLoading!: Tabs[];
  variation3DemoLoading!: Tabs[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.variation1DemoLoading = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/loading/loading-demo1/loading-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/loading/loading-demo1/loading-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/loading/loading-demo1/loading-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation2DemoLoading = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/loading/loading-demo2/loading-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/loading/loading-demo2/loading-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/loading/loading-demo2/loading-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation3DemoLoading = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/loading/loading-demo3/loading-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/loading/loading-demo3/loading-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/loading/loading-demo3/loading-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ]


    this.propertiesLoading = [
      {
        property: '[size]',
        description: 'Size of the loading spinner',
        type: "'sm' | 'md' | 'lg'",
        default: 'md',
      },
      {
        property: '[hidden]',
        description: 'Hide the loading spinner',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[spinnerType]',
        description: 'Type of the loading spinner',
        type: "'bars' | 'dots'",
        default: 'bars',
      }
    ];
  }
}