import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';

@Component({
  selector: 'app-line-chart-docs',
  templateUrl: './line-chart-docs.component.html',
  styleUrls: ['./line-chart-docs.component.scss']
})
export class LineChartDocsComponent implements OnInit {
  variation1DemoLineChart!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoLineChart = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/line-chart/line-chart-demo1/line-chart-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/line-chart/line-chart-demo1/line-chart-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/line-chart/line-chart-demo1/line-chart-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
