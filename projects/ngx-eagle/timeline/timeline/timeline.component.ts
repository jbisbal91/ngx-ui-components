import {
  AfterViewInit,
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
export class TimelineComponent implements OnChanges, AfterViewInit {
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

  ngAfterViewInit(): void {
    this.timelineItems.last.lastItem = true;
    this.initialDimensions();
    this.buildAlternateDimension();
    this.setMode(this.ngxMode);
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
    this.alternateDimension.forEach((item, index) => {
      if (index % 2 !== 0) {
        const temp = item.wLeft;
        item.wLeft = item.wRight;
        item.wRight = temp;
      }
    });
  }

  buildMaxDimension() {
    let maxDotHeight = Number.MIN_VALUE;
    let maxDotWidth = Number.MIN_VALUE;
    let maxWLeft = Number.MIN_VALUE;
    let maxWRight = Number.MIN_VALUE;

    this.timelineItems.forEach((tl) => {
      maxDotHeight = Math.max(maxDotHeight, tl.dotHeight);
      maxDotWidth = Math.max(maxDotWidth, tl.dotWidth);
      maxWLeft = Math.max(maxWLeft, tl.wLeft);
      maxWRight = Math.max(maxWRight, tl.wRight);
    });

    return {
      dotHeight: maxDotHeight,
      dotWidth: maxDotWidth,
      wLeft: maxWLeft,
      wRight: maxWRight,
    };
  }

  setMode(mode: NgxTimelineMode) {
    switch (mode) {
      case 'left':
        this.updateMode(3, 1);
        break;
      case 'right':
        this.updateMode(1, 3);
        break;
      case 'alternate':
        this.setModeAlternate();
        break;
    }
  }

  updateMode(oLeft: number, oRight: number) {
    this.oLeft = oLeft;
    this.oRight = oRight;
    this.setModeLeftAndRight();
  }

  setModeLeftAndRight() {
    if (this.timelineItems) {
      const timelineItems = this.timelineItems.toArray();
      timelineItems.forEach((item, index) => {
        item.wLeft = this.initDimensionList[index].wLeft;
        item.wRight = this.initDimensionList[index].wRight;
      });
      const maxProp = this.buildMaxDimension();
      timelineItems.forEach((item) => {
        item.dotHeight = maxProp.dotHeight;
        item.dotWidth = maxProp.dotWidth;
        item.wLeft = maxProp.wLeft;
        item.wRight = maxProp.wRight;
        item.oLeft = this.oLeft;
        item.oRight = this.oRight;
      });

      this.timelineItems.reset(timelineItems);
    }
  }

  setModeAlternate() {
    if (this.timelineItems) {
      const timelineItems = this.timelineItems.toArray();

      timelineItems.forEach((item, index) => {
        item.wLeft = this.alternateDimension[index].wLeft;
        item.wRight = this.alternateDimension[index].wRight;
        item.oLeft = index % 2 === 0 ? 1 : 3;
        item.oRight = index % 2 === 0 ? 3 : 1;
      });

      const maxProp = this.buildMaxDimension();

      timelineItems.forEach((item, index) => {
        item.dotHeight = maxProp.dotHeight;
        item.dotWidth = maxProp.dotWidth;
        item.wLeft = index % 2 !== 0 ? maxProp.wRight : maxProp.wLeft;
        item.wRight = index % 2 !== 0 ? maxProp.wLeft : maxProp.wRight;
      });

      this.timelineItems.reset(timelineItems);
    }
  }
}
