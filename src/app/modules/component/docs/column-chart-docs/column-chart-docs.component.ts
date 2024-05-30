import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-column-chart-docs',
  templateUrl: './column-chart-docs.component.html',
  styleUrls: ['./column-chart-docs.component.scss']
})
export class ColumnChartDocsComponent implements OnInit {
  variation1DemoColumnChart!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoColumnChart = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/column-chart/column-chart-demo1/column-chart-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/column-chart/column-chart-demo1/column-chart-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/column-chart/column-chart-demo1/column-chart-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}