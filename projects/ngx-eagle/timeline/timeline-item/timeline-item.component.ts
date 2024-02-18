import {
  AfterViewInit,
  Component,
  ElementRef,
  Host,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgxTimelineMode, NgxTimelinePosition } from '../typings';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { TimelineComponent } from '../timeline/timeline.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-timeline-item',
  template: `
    <div class="ngx-timeline-item">
      <div
        [class.timeline-c-left]="oLeft === 1"
        [class.timeline-c-right]="oLeft === 3"
        #timeline_c_left
        [style.min-width.px]="wLeft"
        [style.order]="oLeft"
      >
        <span *ngIf="typeOf(ngxLabel) === 'string'">{{ ngxLabel }}</span>
        <ng-template
          *ngIf="typeOf(ngxLabel) === 'object'"
          [ngTemplateOutlet]="ngxLabel"
        ></ng-template>
      </div>

      <div
        class="c-timeline"
        [style.min-width.px]="ngxSizeDot"
        [style.order]="2"
      >
        <div class="timeline">
          <div #timeline_item class="ngx-timeline-item-head"></div>
          <div
            #timeline_tail
            class="ngx-timeline-item-tail"
            *ngIf="!lastItem"
          ></div>
        </div>
      </div>

      <div
        #timeline_c_right
        class="ngx-timeline-item-content"
        [class.timeline-c-left]="oRight === 1"
        [class.timeline-c-right]="oRight === 3"
        [style.min-width.px]="wRight"
        [style.order]="oRight"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
  host: {
    class: 'timeline-item',
  },
  imports: [NgIf, NgTemplateOutlet],
  standalone: true,
})
export class TimelineItemComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input() ngxPosition?: NgxTimelinePosition;
  @Input() ngxColor: string = '#1890ff';
  @Input() ngxDot?: string | TemplateRef<void>;
  @Input() ngxLabel?: any | TemplateRef<void>;
  @Input() ngxSizeDot: number = 10;

  oLeft: number = 1;
  oRight: number = 3;
  wLeft: number = 0;
  wRight: number = 0;
  firstItem: boolean = false;
  lastItem: boolean = false;
  ngxMode!: NgxTimelineMode;

  @ViewChild('timeline_c_left') timelineCLeftRef!: ElementRef;
  @ViewChild('timeline_c_right') timelineCRightRef!: ElementRef;
  @ViewChild('timeline_item') timelineItemRef!: ElementRef;
  @ViewChild('timeline_tail') timelineTailRef!: ElementRef;

  private subscription: Subscription = new Subscription();

  constructor(
    private renderer: Renderer2,
    @Optional() @Host() public timelineComp: TimelineComponent
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.timelineComp?.ngxMode$.subscribe((mode) => {
        this.ngxMode = mode;
        this.setMode(mode);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setMode(mode: NgxTimelineMode) {
    switch (mode) {
      case 'left':
        this.oLeft = 3;
        this.oRight = 1;
        break;
      case 'right':
        this.oLeft = 1;
        this.oRight = 3;
        break;
    }
  }

  ngAfterViewInit(): void {
    this.setSizeDot();
    this.setTailColor();
    this.setTailHeight();
    this.setWLeft();
    this.setWRight();
  }

  setWLeft() {
    if (this.timelineCLeftRef) {
      this.wLeft = this.timelineCLeftRef.nativeElement.clientWidth;
    }
  }

  setWRight() {
    if (this.timelineCRightRef) {
      this.wRight = this.timelineCRightRef.nativeElement.clientWidth;
    }
  }

  typeOf(value: any) {
    return typeof value;
  }

  setSizeDot() {
    if (this.timelineItemRef) {
      this.renderer.setStyle(
        this.timelineItemRef.nativeElement,
        'height',
        `${this.ngxSizeDot}px`
      );
      this.renderer.setStyle(
        this.timelineItemRef.nativeElement,
        'width',
        `${this.ngxSizeDot}px`
      );
    }
  }

  setTailHeight() {
    if (this.timelineTailRef) {
      this.renderer.setStyle(
        this.timelineTailRef.nativeElement,
        'height',
        `calc(100% - ${this.ngxSizeDot}px)`
      );
    }
  }

  setTailColor() {
    if (this.timelineItemRef) {
      this.renderer.setStyle(
        this.timelineItemRef.nativeElement,
        'color',
        this.ngxColor
      );
      this.renderer.setStyle(
        this.timelineItemRef.nativeElement,
        'border-color',
        this.ngxColor
      );
    }
  }
}
