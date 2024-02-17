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
      const ngxSizeDot: number[] = [];
      const wLeft: number[] = [];
      const wRight: number[] = [];
      this.timelineItems.forEach((tl) => {
        ngxSizeDot.push(tl.ngxSizeDot);
        wLeft.push(tl.wLeft);
        wRight.push(tl.wRight);
      });
      let maxNgxSizeDot = Math.max(...ngxSizeDot);
      let maxWLeft = Math.max(...wLeft);
      let maxWRight = Math.max(...wRight);
      this.timelineItems.forEach((tl) => {
        tl.ngxSizeDot = maxNgxSizeDot;
        tl.wLeft = maxWLeft;
        tl.wRight = maxWRight;
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
