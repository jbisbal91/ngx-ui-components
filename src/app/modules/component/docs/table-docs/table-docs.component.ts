import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-docs',
  templateUrl: './table-docs.component.html',
  styleUrls: ['./table-docs.component.scss']
})
export class TableDocsComponent implements OnInit {
  variation1DemoTable!: Tabs[];

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
            'assets/demos/tabletable-demo1/table-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabletable-demo1/table-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
