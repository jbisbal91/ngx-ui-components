import { Component, Input, TemplateRef } from '@angular/core';
import { NgxTimelineItemColor, NgxTimelinePosition } from '../typings';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ngx-timeline-item',
  templateUrl: './timeline-item.component.html',
  host: {
    class: 'timeline-item',
  },
  imports: [NgIf],
  standalone: true,
})
export class TimelineItemComponent {
  @Input() ngxPosition?: NgxTimelinePosition;
  @Input() ngxColor: NgxTimelineItemColor = 'blue';
  @Input() ngxDot?: string | TemplateRef<void>;
  @Input() ngxLabel?: string | TemplateRef<void>;
  first: boolean = false;
  last: boolean = false;
}
