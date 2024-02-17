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
        return this.setModeAlternate();
      case 'custom':
        break;
    }
    this.timelineItems.forEach((tl) => {
      tl.oLeft = oLeft;
      tl.oRight = oRight;
    });
  }

  setModeAlternate() {
    const timelineItems = this.timelineItems.toArray();
    const ngxSizeDot: number[] = [];
    const wLeft: number[] = [];
    const wRight: number[] = [];

    for (let i = 0; i < this.timelineItems.length; ++i) {
      if (i % 2 === 0) {
        timelineItems[i].oLeft = 1;
        timelineItems[i].oRight = 3;
        ngxSizeDot.push(timelineItems[i].ngxSizeDot);
        wLeft.push(timelineItems[i].wLeft);
        wRight.push(timelineItems[i].wRight);
      }
      if (i % 2 === 1) {
        timelineItems[i].oLeft = 3;
        timelineItems[i].oRight = 1;
        ngxSizeDot.push(timelineItems[i].ngxSizeDot);
        wLeft.push(timelineItems[i].wRight);
        wRight.push(timelineItems[i].wLeft);
      }
    }

    let maxNgxSizeDot = Math.max(...ngxSizeDot);
    let maxWLeft = Math.max(...wLeft);
    let maxWRight = Math.max(...wRight);
    this.timelineItems.forEach((tl) => {
      tl.ngxSizeDot = maxNgxSizeDot;
      tl.wLeft = maxWLeft;
      tl.wRight = maxWRight;
    });
  }

  // setModeAlternate() {
  //   let positions: { oLeft: number; oRight: number }[] = [];
  //   for (let i = 0; i < this.timelineItems.length; ++i) {
  //     if (i % 2 === 0) {
  //       positions.push({ oLeft: 1, oRight: 3 });
  //     }
  //     if (i % 2 === 1) {
  //       positions.push({ oLeft: 3, oRight: 1 });
  //     }
  //   }
  // }
}
