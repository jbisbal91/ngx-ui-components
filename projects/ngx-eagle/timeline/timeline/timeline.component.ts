import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  OnInit,
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
export class TimelineComponent implements OnChanges, OnInit, AfterViewInit {
  @ContentChildren(TimelineItemComponent)
  public timelineItems!: QueryList<TimelineItemComponent>;

  @Input() ngxMode: NgxTimelineMode = 'right';

  oLeft: number = 1;
  oRight: number = 3;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxMode']) {
      this.setMode(this.ngxMode);
    }
  }

  initDimensionList: { wLeft: number; wRight: number }[] = [];
  alternateDimension: { wLeft: number; wRight: number }[] = [];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initialDimensions();
    this.buildAlternateDimension();
    this.buildTimeline();
    console.log(this.initDimensionList);
    console.log(this.alternateDimension);
  }

  buildTimeline() {
    if (this.timelineItems) {
      this.timelineItems.last.lastItem = true;
      const maxProp = this.buildMaxDimension();
      this.timelineItems.forEach((tl) => {
        tl.ngxSizeDot = maxProp.ngxSizeDot;
        tl.wLeft = maxProp.wLeft;
        tl.wRight = maxProp.wRight;
        tl.oLeft = this.oLeft;
        tl.oRight = this.oRight;
      });
    }
  }

  initialDimensions() {
    this.timelineItems.forEach((tl) => {
      this.initDimensionList.push({ wLeft: tl.wLeft, wRight: tl.wRight });
    });
    this.alternateDimension = this.initDimensionList.map((item) => ({
      ...item,
    }));
  }

  buildAlternateDimension() {
    for (let i = 0; i < this.alternateDimension.length; ++i) {
      if (i % 2 !== 0) {
        const { wLeft, wRight } = this.alternateDimension[i];
        this.alternateDimension[i].wRight = wLeft;
        this.alternateDimension[i].wLeft = wRight;
      }
    }
  }

  buildMaxDimension() {
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

    return { ngxSizeDot: maxNgxSizeDot, wLeft: maxWLeft, wRight: maxWRight };
  }

  setMode(mode: NgxTimelineMode) {
    switch (mode) {
      case 'left':
        this.oLeft = 3;
        this.oRight = 1;
        this.setModeLeftAndRight();
        break;
      case 'right':
        this.oLeft = 1;
        this.oRight = 3;
        this.setModeLeftAndRight();
        break;
      case 'alternate':
        this.setModeAlternate();
        break;
    }
  }

  setModeLeftAndRight() {
    if (this.timelineItems) {
      const timelineItems = this.timelineItems.toArray();
      for (let i = 0; i < timelineItems.length; ++i) {
        timelineItems[i].wLeft = this.initDimensionList[i].wLeft;
        timelineItems[i].wRight = this.initDimensionList[i].wRight;
        timelineItems[i].oLeft = this.oLeft;
        timelineItems[i].oRight = this.oRight;
      }
      this.timelineItems.reset(timelineItems);
      const maxProp = this.buildMaxDimension();
      this.timelineItems.forEach((tl) => {
        tl.ngxSizeDot = maxProp.ngxSizeDot;
        tl.wLeft = maxProp.wLeft;
        tl.wRight = maxProp.wRight;
        tl.oLeft = this.oLeft;
        tl.oRight = this.oRight;
      });
    }
  }

  setModeAlternate() {
    if (this.timelineItems) {
      const timelineItems = this.timelineItems.toArray();
      for (let i = 0; i < timelineItems.length; ++i) {
        timelineItems[i].wLeft = this.alternateDimension[i].wLeft;
        timelineItems[i].wRight = this.alternateDimension[i].wRight;
        if (i % 2 === 0) {
          timelineItems[i].oLeft = 1;
          timelineItems[i].oRight = 3;
        } else {
          timelineItems[i].oLeft = 3;
          timelineItems[i].oRight = 1;
        }
      }
      const maxProp = this.buildMaxDimension();
      for (let i = 0; i < timelineItems.length; ++i) {
        if (i % 2 !== 0) {
          timelineItems[i].wLeft = maxProp.wRight;
          timelineItems[i].wRight = maxProp.wLeft;
        } else {
          timelineItems[i].wLeft = maxProp.wLeft;
          timelineItems[i].wRight = maxProp.wRight;
        }
      }
      this.timelineItems.reset(timelineItems);
    }
  }
}
