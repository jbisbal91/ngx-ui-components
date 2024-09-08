import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-timeline-docs',
  templateUrl: './timeline-docs.component.html',
})
export class TimelineDocsComponent implements OnInit {
  moduleImport = "import { TimelineModule } from 'ngx-eagle/timeline';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesTimeline: Property[] = [];
  propertiesTimelineItem: Property[] = [];
  variation1DemoTimelines!: Tabs[];
  variation2DemoTimelines!: Tabs[];
  variation3DemoTimelines!: Tabs[];
  variation4DemoTimelines!: Tabs[];
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
    this.variation2DemoTimelines = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo2/timeline-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo2/timeline-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo2/timeline-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoTimelines = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo3/timeline-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo3/timeline-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo3/timeline-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation4DemoTimelines = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo4/timeline-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo4/timeline-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo4/timeline-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesTimeline = [
      {
        property: '[ngxMode]',
        description:
          'By sending alternate the timeline will distribute the nodes to the left and right',
        type: "'left' | 'alternate' | 'right'",
        default: 'right',
      },
    ];

    this.propertiesTimelineItem = [
      {
        property: '[ngxColor]',
        description: 'The color of the dot on the timeline.',
        type: 'string',
        default: '#1890ff',
      },
      {
        property: '[ngxDot]',
        description: 'Customize timeline dot',
        type: 'any | TemplateRef<void>',
        default: '-',
      },
      {
        property: '[ngxLabel]',
        description: 'Set the label',
        type: 'any | TemplateRef<void>',
        default: '-',
      },
    ];
  }
}
