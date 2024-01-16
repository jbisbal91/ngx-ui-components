import { Component, Input, TemplateRef } from '@angular/core';
import { NgxTimelineItemColor, NgxTimelinePosition } from '../typings';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ngx-timeline-item',
  template: `
    <div class="ngx-timeline-item">
      <div class="timeline">
        <div
          class="ngx-timeline-item-head"
          [class.ngx-timeline-item-head-blue]="ngxColor === 'blue'"
          [class.ngx-timeline-item-head-red]="ngxColor === 'red'"
          [class.ngx-timeline-item-head-green]="ngxColor === 'green'"
          [class.ngx-timeline-item-head-gray]="ngxColor === 'gray'"
          [class.ngx-timeline-item-head-grey]="ngxColor === 'grey'"
        ></div>
        <div class="ngx-timeline-item-tail"></div>
        <div class="ngx-timeline-arrow" *ngIf="!last"></div>
        <div class="ngx-timeline-end" *ngIf="last"></div>
      </div>
      <div class="ngx-timeline-item-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
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
