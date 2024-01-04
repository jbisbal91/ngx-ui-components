import { Component } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';

@Component({
  selector: 'app-timeline-docs',
  templateUrl: './timeline-docs.component.html',
  styleUrls: ['./timeline-docs.component.scss'],
})
export class TimelineDocsComponent {
  variation1DemoTimeline!: Tabs[];
}
