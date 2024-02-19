import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { NgxTimelineMode } from '../typings';

@Component({
  selector: 'ngx-timeline-item',
  template: `
    <div class="ngx-timeline-item">
      <!----------left timeline content---------->
      <div *ngIf="mode !== 'default'"
        [class.timeline-c-left]="oLeft === 1"
        [class.timeline-c-right]="oLeft === 3"
        [style.order]="oLeft"
      >
        <span *ngIf="typeOf(ngxLabel) === 'string'">{{ ngxLabel }}</span>
        <ng-template
          *ngIf="typeOf(ngxLabel) === 'object'"
          [ngTemplateOutlet]="ngxLabel"
        ></ng-template>
      </div>
      <!----------timeline point---------->
      <div class="c-timeline" [style.min-width.px]="dotWidth" [style.order]="2">
        <div class="timeline">
          <div
            *ngIf="!ngxDot"
            #timeline_dot_item
            class="ngx-timeline-item-head"
          ></div>
          <span #timeline_dot_item *ngIf="typeOf(ngxDot) === 'string'">{{
            ngxDot
          }}</span>
          <div #timeline_dot_item *ngIf="typeOf(ngxDot) === 'object'">
            <ng-template [ngTemplateOutlet]="ngxDot"></ng-template>
          </div>
          <div
            #timeline_tail
            class="ngx-timeline-item-tail"
            *ngIf="!lastItem"
          ></div>
        </div>
      </div>
      <!----------right timeline content---------->
      <div
        class="ngx-timeline-item-content"
        [class.timeline-c-left]="oRight === 1"
        [class.timeline-c-right]="oRight === 3"
        [style.order]="oRight"
        [style.width.%]="mode !== 'default' ? 50 : 'auto'"
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
export class TimelineItemComponent implements AfterViewInit, OnChanges {
  @Input() ngxColor: string = '#1890ff';
  @Input() ngxDot!: any | TemplateRef<void>;
  @Input() ngxLabel!: any | TemplateRef<void>;

  oLeft: number = 1;
  oRight: number = 3;
  lastItem: boolean = false;
  dotHeight: number = 0;
  dotWidth: number = 0;

  mode: NgxTimelineMode = 'default';

  @ViewChild('timeline_dot_item') timelineDotItemRef!: ElementRef;
  @ViewChild('timeline_tail') timelineTailRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.initialDotDimensions();
    this.setSizeDot();
    this.setDotColor();
    this.setTailHeight();
  }

  ngAfterViewInit(): void {
    this.initialDotDimensions();
    this.setSizeDot();
    this.setDotColor();
    this.setTailHeight();
  }
  typeOf(value: any) {
    return typeof value;
  }

  initialDotDimensions() {
    if (this.timelineDotItemRef) {
      this.dotHeight = this.timelineDotItemRef.nativeElement.offsetHeight;
      this.dotWidth = this.timelineDotItemRef.nativeElement.offsetWidth;
    }
  }

  setSizeDot() {
    if (this.timelineDotItemRef) {
      this.renderer.setStyle(
        this.timelineDotItemRef.nativeElement,
        'height',
        `${this.dotHeight}px`
      );
      this.renderer.setStyle(
        this.timelineDotItemRef.nativeElement,
        'width',
        `${this.dotWidth}px`
      );
    }
  }

  setTailHeight() {
    if (this.timelineTailRef) {
      this.renderer.setStyle(
        this.timelineTailRef.nativeElement,
        'height',
        `calc(100% - ${this.dotHeight}px)`
      );
    }
  }

  setDotColor() {
    if (this.timelineDotItemRef) {
      this.renderer.setStyle(
        this.timelineDotItemRef.nativeElement,
        'color',
        this.ngxColor
      );
      this.renderer.setStyle(
        this.timelineDotItemRef.nativeElement,
        'border-color',
        this.ngxColor
      );
    }
  }
}
