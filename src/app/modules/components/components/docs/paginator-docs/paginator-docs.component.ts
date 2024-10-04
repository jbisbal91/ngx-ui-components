import { Component, OnInit } from '@angular/core';
import { Property } from '../../interfaces/property.interface';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paginator-docs',
  templateUrl: './paginator-docs.component.html',
})
export class PaginatorDocsComponent implements OnInit {
  moduleImport = "import { PaginatorModule } from 'ngx-eagle/paginator';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesPaginator: Property[] = [];
  variation1DemoPaginator!: Tabs[];
  variation2DemoPaginator!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoPaginator = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/paginator/paginator-demo1/paginator-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/paginator/paginator-demo1/paginator-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/paginator/paginator-demo1/paginator-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation2DemoPaginator = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/paginator/paginator-demo2/paginator-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/paginator/paginator-demo2/paginator-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/paginator/paginator-demo2/paginator-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesPaginator = [
      {
        property: '[hidePageSize]',
        description:
          'Whether to hide the page size selection UI from the user.',
        type: 'boolean',
        default: 'false',
      },
      {
        property: 'length',
        description:
          'The length of the total number of items that are being paginated. Defaulted to 0.',
        type: 'number',
        default: '0',
      },
      {
        property: 'pageSize',
        description:
          'Number of items to display on a page. By default set to 0.',
        type: 'number',
        default: '0',
      },
      {
        property: 'pageSizeOptions',
        description:
          'The set of provided page size options to display to the user.',
        type: 'number[]',
        default: '[]',
      },
      {
        property: 'pageStatus',
        description: 'Initializes the pagination determined by the entry',
        type: 'PageEvent',
        default: '-',
      },
      {
        property: '[showExtremeButtons]',
        description: 'Whether to show the first/last buttons UI to the user.',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '(page)',
        description:
          'Event emitted when the paginator changes the page size or page index.',
        type: 'EventEmitter<PageEvent>',
        default: '-',
      },
    ];
  }
}
