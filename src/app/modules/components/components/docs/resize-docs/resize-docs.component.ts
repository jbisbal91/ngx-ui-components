import { Component, OnInit } from '@angular/core';
import { Property } from '../../interfaces/property.interface';
import { HttpClient } from '@angular/common/http';
import { Tabs } from '../../interfaces/tabs.interface';

@Component({
  selector: 'app-resize-docs',
  templateUrl: './resize-docs.component.html'
})
export class ResizeDocsComponent  implements OnInit {
  moduleImport = "import { ResizableModule } from 'ngx-eagle/resizable';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesResizable: Property[] = [];
  variation1DemoResizable!: Tabs[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoResizable = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/resizable/resizable-demo1/resizable-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/resizable/resizable-demo1/resizable-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/resizable/resizable-demo1/resizable-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesResizable = [      
      {
        property: '[]',
        description: '',
        type: '',
        default: '',
      },
      {
        property: '[]',
        description: '',
        type: '',
        default: '',
      },
      
    ];
  }
}
