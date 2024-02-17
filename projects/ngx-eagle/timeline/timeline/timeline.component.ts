import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { TimelineItemComponent } from '../timeline-item/timeline-item.component';
import { NgForOf } from '@angular/common';
import { NgxTimelineMode } from '../typings';

@Component({
  selector: 'ngx-timeline',
  template: `<ng-content></ng-content>`,
  standalone: true,
  imports: [NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements AfterViewInit {
  @ContentChildren(TimelineItemComponent)
  public timelineItems!: QueryList<TimelineItemComponent>;

  @Input() ngxMode: NgxTimelineMode = 'left';

  ngAfterViewInit(): void {
    setTimeout(() => {
      const sizes: number[] = [];
      this.timelineItems.forEach((tl) => {
        sizes.push(tl.ngxSize);
      });

      let max = Math.max(...sizes);

      console.log('El mayor número es:', max);
      this.timelineItems.forEach((tl) => {
        tl.ngxSize = max;
        if (this.timelineItems.first === tl) {
          tl.first = true;
        }
        if (this.timelineItems.last === tl) {
          tl.last = true;
        }
      });
    });
  }
}
