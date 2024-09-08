import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-table-docs',
  templateUrl: './table-docs.component.html',
})
export class TableDocsComponent implements OnInit {
  moduleImport = "import { TableModule } from 'ngx-eagle/table';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesTable: Property[] = [];
  propertiesSort: Property[] = [];
  elementsCard: any[] = [];
  variation1DemoTable!: Tabs[];
  variation2DemoTable!: Tabs[];
  variation3DemoTable!: Tabs[];
  variation4DemoTable!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoTable = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/table/table-demo1/table-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/table/table-demo1/table-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/table/table-demo1/table-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoTable = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/table/table-demo2/table-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/table/table-demo2/table-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/table/table-demo2/table-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoTable = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/table/table-demo3/table-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/table/table-demo3/table-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/table/table-demo3/table-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation4DemoTable = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/table/table-demo4/table-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/table/table-demo4/table-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/table/table-demo4/table-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesTable = [
      {
        property: '[scroll]',
        description: `Table dimensions (horizontal and vertical) { x?: string; and?: string; }`,
        type: `{x?: string; y?: string;}`,
        default: 'null',
      },
      {
        property: '[bordered]',
        description: 'Allows table borders',
        type: 'boolean',
        default: 'false',
      },
    ];

    this.propertiesSort = [
      {
        property: '(changeSorting)',
        description: 'Allows to customize the comparison function',
        type: `EventEmitter<"'ascend' | 'descend' | null">`,
        default: '-',
      },
    ];

    this.elementsCard = [
      {
        element: 'ngx-table',
        decorator: 'directive',
        characteristic: 'standalone',
        description: 'Allows the styles and functionality of the table.',
      },
      {
        element: 'ngx-column-group',
        decorator: 'directive',
        characteristic: 'standalone',
        description: 'Allows you to group columns.',
      },
      {
        element: 'ngxResize',
        decorator: 'directive',
        characteristic: 'standalone',
        description: 'Allows you to change the size of the columns.',
      },
      {
        element: 'ngxSort',
        decorator: 'directive',
        characteristic: 'standalone',
        description: 'Allows you to set the sorting priority of the columns.',
      },
    ];
  }
}
