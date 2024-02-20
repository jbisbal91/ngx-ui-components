import { Component } from '@angular/core';
import { NgxTimelineMode } from 'ngx-eagle/timeline';

@Component({
  selector: 'app-timeline-demo1',
  templateUrl: './timeline-demo1.component.html',
  styleUrls: ['./timeline-demo1.component.scss']
})
export class TimelineDemo1Component {
  mode: NgxTimelineMode = 'alternate';
}
