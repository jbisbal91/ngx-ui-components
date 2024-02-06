import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rate-docs',
  templateUrl: './rate-docs.component.html',
  styleUrls: ['./rate-docs.component.scss']
})
export class RateDocsComponent implements OnInit  {
  variation1DemoRate!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoRate = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo1/rate-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo1/rate-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/rate/rate-demo1/rate-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
