import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-progress-docs',
  templateUrl: './progress-docs.component.html',
})
export class ProgressDocsComponent implements OnInit {
  variation1DemoProgress!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoProgress = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo1/progress-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo1/progress-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/progress/progress-demo1/progress-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}

