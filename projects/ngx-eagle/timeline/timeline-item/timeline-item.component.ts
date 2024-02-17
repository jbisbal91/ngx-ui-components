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
import { NgIf } from '@angular/common';

@Component({
  selector: 'ngx-timeline-item',
  template: `
    <div class="ngx-timeline-item">
      <span>{{ ngxLabel }}</span>
      <div class="c-timeline" [style.min-width.px]="ngxSize">
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
  imports: [NgIf],
  standalone: true,
})
export class TimelineItemComponent implements AfterViewInit {
  @Input() ngxPosition?: NgxTimelinePosition;
  @Input() ngxColor: string = '#1890ff';
  @Input() ngxDot?: string | TemplateRef<void>;
  @Input() ngxLabel?: string | TemplateRef<void>;
  @Input() ngxSize: number = 10;
  first: boolean = false;
  last: boolean = false;

  @ViewChild('timeline_item') timelineItemRef!: ElementRef;
  @ViewChild('timeline_tail') timelineTailRef!: ElementRef;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.setSize();
    this.setColor();
    this.setTail();
  }

  setSize() {
    if (this.timelineItemRef) {
      this.renderer.setStyle(
        this.timelineItemRef.nativeElement,
        'height',
        `${this.ngxSize}px`
      );
      this.renderer.setStyle(
        this.timelineItemRef.nativeElement,
        'width',
        `${this.ngxSize}px`
      );
    }
  }

  setTail() {
    if (this.timelineTailRef) {
      this.renderer.setStyle(
        this.timelineTailRef.nativeElement,
        'height',
        `calc(100% - ${this.ngxSize}px)`
      );
    }
  }

  setColor() {
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
