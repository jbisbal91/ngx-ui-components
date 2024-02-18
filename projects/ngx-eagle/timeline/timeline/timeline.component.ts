import {
  AfterContentInit,
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
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'ngx-timeline',
  template: `<ng-content></ng-content>`,
  standalone: true,
  imports: [NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements OnChanges, OnInit, AfterContentInit {
  @ContentChildren(TimelineItemComponent)
  public timelineItems!: QueryList<TimelineItemComponent>;

  @Input() ngxMode!: NgxTimelineMode;
  readonly ngxMode$ = new ReplaySubject<NgxTimelineMode>(0);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxMode']) {
      this.ngxMode$.next(this.ngxMode);
      console.log('change');
    }
  }

  initDimensionList: { wLeft: number; wRight: number }[] = [];

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    setTimeout(() => {
      //this.timelineItems.first.firstItem = true;
      this.timelineItems.last.lastItem = true;
      const maxProp = this.buildMaxDimension();
      this.timelineItems.forEach((tl) => {
        this.initialDimensions(tl.wLeft, tl.wRight);
        console.log(this.initDimensionList);
        tl.ngxSizeDot = maxProp.ngxSizeDot;
        tl.wLeft = maxProp.wLeft;
        tl.wRight = maxProp.wRight;
      });
    });
  }

  initialDimensions(wLeft: number, wRight: number) {
    this.initDimensionList.push({ wLeft: wLeft, wRight: wRight });
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
}
