import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
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
export class TimelineComponent implements OnChanges, AfterContentInit {
  @ContentChildren(TimelineItemComponent)
  public timelineItems!: QueryList<TimelineItemComponent>;

  @Input() ngxMode!: NgxTimelineMode;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxMode']) {
      setTimeout(() => {
        this.setMode(this.ngxMode);
      });
    }
  }

  ngAfterContentInit(): void {
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

  setMode(mode: NgxTimelineMode) {
    let oLeft = 0;
    let oRight = 0;
    switch (mode) {
      case 'left':
        oLeft = 3;
        oRight = 1;
        break;
      case 'right':
        oLeft = 1;
        oRight = 3;
        break;
      case 'alternate':
        break;
      case 'custom':
        break;
    }
    this.timelineItems.forEach((tl) => {
      tl.oLeft = oLeft;
      tl.oRight = oRight;
    });
  }
}
