import { Component } from '@angular/core';
import { NgxTimelineMode } from 'ngx-eagle/timeline/typings';

@Component({
  selector: 'app-timeline-demo4',
  templateUrl: './timeline-demo4.component.html',
  styleUrls: ['./timeline-demo4.component.scss'],
})
export class TimelineDemo4Component {
  mode: NgxTimelineMode = 'left';
}
