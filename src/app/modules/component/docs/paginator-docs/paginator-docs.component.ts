import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paginator-docs',
  templateUrl: './paginator-docs.component.html',
  styleUrls: ['./paginator-docs.component.scss'],
})
export class PaginatorDocsComponent implements OnInit {
  variation1DemoPaginator!: Tabs[];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
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
  }
}
