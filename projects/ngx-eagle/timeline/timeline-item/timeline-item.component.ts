import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgxTimelinePosition } from '../typings';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ngx-timeline-item',
  template: `
    <div class="ngx-timeline-item">
      <div class="timeline-c-left" #timeline_c_left [style.min-width.px]="wLeft">
        <span *ngIf="typeOf(ngxLabel) === 'string'">{{ ngxLabel }}</span>
        <ng-template
          *ngIf="typeOf(ngxLabel) === 'object'"
          [ngTemplateOutlet]="ngxLabel"
        ></ng-template>
      </div>

      <div class="c-timeline" [style.min-width.px]="ngxSizeDot">
        <div class="timeline">
          <div #timeline_item class="ngx-timeline-item-head"></div>
          <div
            #timeline_tail
            class="ngx-timeline-item-tail"
            *ngIf="!last"
          ></div>
        </div>
      </div>
      
      <div class="ngx-timeline-item-content">
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
  @Input() ngxPosition?: NgxTimelinePosition;
  @Input() ngxColor: string = '#1890ff';
  @Input() ngxDot?: string | TemplateRef<void>;
  @Input() ngxLabel?: any | TemplateRef<void>;
  @Input() ngxSizeDot: number = 10;

  wLeft: number = 0;
  first: boolean = false;
  last: boolean = false;

  @ViewChild('timeline_c_left') timelineCLeftRef!: ElementRef;
  @ViewChild('timeline_item') timelineItemRef!: ElementRef;
  @ViewChild('timeline_tail') timelineTailRef!: ElementRef;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.setSizeDot();
    this.setTailColor();
    this.setTailHeight();
    this.setWLeft();
  }

  setWLeft() {
    if (this.timelineCLeftRef) {
      this.wLeft = this.timelineCLeftRef.nativeElement.clientWidth;
      console.log(this.wLeft);
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
