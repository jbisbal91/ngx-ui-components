import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-timeline-docs',
  templateUrl: './timeline-docs.component.html',
})
export class TimelineDocsComponent implements OnInit {
  variation1DemoTimelines!: Tabs[];
  variation2DemoTimelines!: Tabs[];
  variation3DemoTimelines!: Tabs[];
  variation4DemoTimelines!: Tabs[];
  variation5DemoTimelines!: Tabs[];
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoTimelines = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo1/timeline-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo1/timeline-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo1/timeline-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
