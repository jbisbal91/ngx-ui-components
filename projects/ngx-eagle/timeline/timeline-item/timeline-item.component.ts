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
      <div class="timeline">
        <div #timeline_item class="ngx-timeline-item-head"></div>
        <div #timeline_tail class="ngx-timeline-item-tail" *ngIf="!last"></div>
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
  first: boolean = false;
  last: boolean = false;

  @ViewChild('timeline_item') timelineItemRef!: ElementRef;
  @ViewChild('timeline_tail') timelineTailRef!: ElementRef;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.setColor();
    this.setTail()
  }

  setTail() {
    if(this.timelineItemRef && this.timelineTailRef) {      
    const heightItem = this.timelineItemRef.nativeElement.offsetHeight;
      this.renderer.setStyle(
        this.timelineTailRef.nativeElement,
        'height',
        `calc(100% - ${heightItem}px)`
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
