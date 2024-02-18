import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ngx-timeline-item',
  template: `
    <div class="ngx-timeline-item">
      <!----------left timeline content---------->
      <div
        *ngIf="ngxLabel"
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
      <!----------timeline point---------->
      <div
        class="c-timeline"
        [style.min-width.px]="ngxSizeDot"
        [style.order]="2"
      >
        <div class="timeline">
          <div
            *ngIf="typeOf(ngxDot) !== 'object'"
            #timeline_item
            class="ngx-timeline-item-head"
          ></div>
          <ng-template
            *ngIf="typeOf(ngxDot) === 'object'"
            [ngTemplateOutlet]="ngxDot"
          ></ng-template>
          <div
            #timeline_tail
            class="ngx-timeline-item-tail"
            *ngIf="!lastItem"
          ></div>
        </div>
      </div>
      <!----------right timeline content---------->
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
export class TimelineItemComponent implements AfterViewInit {
  @Input() ngxColor: string = '#1890ff';
  @Input() ngxDot?: any | TemplateRef<void>;
  @Input() ngxLabel?: any | TemplateRef<void>;
  @Input() ngxSizeDot: number = 10;

  oLeft: number = 1;
  oRight: number = 3;
  wLeft: number = 0;
  wRight: number = 0;
  firstItem: boolean = false;
  lastItem: boolean = false;

  @ViewChild('timeline_c_left') timelineCLeftRef!: ElementRef;
  @ViewChild('timeline_c_right') timelineCRightRef!: ElementRef;
  @ViewChild('timeline_item') timelineItemRef!: ElementRef;
  @ViewChild('timeline_tail') timelineTailRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

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
