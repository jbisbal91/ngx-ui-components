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
  variation2DemoResizable!: Tabs[];
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

    this.variation2DemoResizable = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/resizable/resizable-demo2/resizable-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/resizable/resizable-demo2/resizable-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/resizable/resizable-demo2/resizable-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.propertiesResizable = [      
      {
        property: '[resizableWidth]',
        description: 'Width of the resizable element',
        type: 'number',
        default: '0',
      },
      {
        property: '[minWidth]',
        description: 'Minimum width of the resizable element',
        type: 'number',
        default: '100',
      },
      {
        property: '[minHeight]',
        description: 'Minimum height of the resizable element',
        type: 'number',
        default: '100',
      },
      {
        property: '[markerPosition]',
        description: 'Position of the resize marker',
        type: 'MarkerPosition',
        default: 'bottom-right',
      },
      {
        property: '[resizeDirection]',
        description: 'Direction of the resize',
        type: 'ResizeDirection',
        default: 'diagonal',
      },
      {
        property: '(onResize)',
        description: 'Emits the new dimensions of the resizable element',
        type: '{ width: number, height: number }',
        default: '-',
      }
    ];
  }
}
