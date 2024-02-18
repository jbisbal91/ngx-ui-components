import { Component } from '@angular/core';
import { NgxTimelineMode } from 'projects/ngx-eagle/timeline';

@Component({
  selector: 'app-timeline-demo4',
  templateUrl: './timeline-demo4.component.html',
  styleUrls: ['./timeline-demo4.component.scss']
})
export class TimelineDemo4Component {
  mode: NgxTimelineMode = 'left';
}
