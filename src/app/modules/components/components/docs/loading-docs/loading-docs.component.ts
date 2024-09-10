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

  constructor(private http: HttpClient) {}

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

    this.propertiesLoading = [      
      {
        property: '[loadingText]',
        description: 'Text to be displayed in the loading',
        type: 'string',
        default: '',
      },
      {
        property: '[loadingPosition]',
        description: 'Position of the loading',
        type: 'Position',
        default: 'top',
      }
    ];
  }
}