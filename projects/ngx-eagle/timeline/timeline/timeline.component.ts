import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostListener,
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

  @Input() ngxMode: NgxTimelineMode = 'default';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxMode']) {
      this.setMode(this.ngxMode);
    }
    this.setSizeDot();
  }

  ngAfterViewInit(): void {
    this.timelineItems.last.lastItem = true;
    this.setSizeDot();
    this.setMode(this.ngxMode);
  }

  buildMaxDimension() {
    let maxDotHeight = Number.MIN_VALUE;
    let maxDotWidth = Number.MIN_VALUE;
    this.timelineItems.forEach((tl) => {
      maxDotHeight = Math.max(maxDotHeight, tl.dotHeight);
      maxDotWidth = Math.max(maxDotWidth, tl.dotWidth);
    });
    return {
      dotHeight: maxDotHeight,
      dotWidth: maxDotWidth,
    };
  }

  setMode(mode: NgxTimelineMode) {
    if (this.timelineItems) {
      this.timelineItems.forEach((item) => {
        item.mode = this.ngxMode;
      });
    }
    switch (mode) {
      case 'left':
        this.setModeLeftAndRight(3, 1);
        break;
      case 'right':
        this.setModeLeftAndRight(1, 3);
        break;
      case 'alternate':
        this.setModeAlternate();
        break;
    }
  }

  setSizeDot() {
    if (this.timelineItems) {
      const maxProp = this.buildMaxDimension();
      this.timelineItems.forEach((item) => {
        item.dotHeight = maxProp.dotHeight;
        item.dotWidth = maxProp.dotWidth;
      });
    }
  }

  setModeLeftAndRight(oLeft: number, oRight: number) {
    if (this.timelineItems) {
      this.timelineItems.forEach((item) => {
        item.oLeft = oLeft;
        item.oRight = oRight;
      });
    }
  }

  setModeAlternate() {
    if (this.timelineItems) {
      this.timelineItems.forEach((item, index) => {
        item.oLeft = index % 2 === 0 ? 1 : 3;
        item.oRight = index % 2 === 0 ? 3 : 1;
      });
    }
  }
}
