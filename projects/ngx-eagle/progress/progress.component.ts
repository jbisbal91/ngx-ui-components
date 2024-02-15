import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgxSize, NgxType } from './typings';

@Component({
  selector: 'ngx-progress',
  template: `
    <div
      class="ngx-progress-outer"
      [class.ngx-progress-sm]="ngxSize === 'small'"
      [class.ngx-progress-df]="ngxSize === 'default'"
      [class.ngx-progress-lg]="ngxSize === 'large'"
    >
      <div #line_progress_inner class="ngx-progress-inner"></div>
    </div>

    <span>{{ ngxPercent }}%</span>
  `,
  host: {
    class: 'ngx-progress',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ProgressComponent implements AfterViewInit {
  @Input() ngxType: NgxType = 'line';
  @Input() ngxSize: NgxSize = 'default';
  @Input() ngxPercent: number = 0;
  @Input() ngxColor: string = '#1890FF';
  @Input() ngxTimer: number = 0.5;

  @ViewChild('line_progress_inner') lineProgressRef!: ElementRef;

  constructor(private cdr: ChangeDetectorRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.updateProgress();
    this.cdr.markForCheck();
  }

  private updateProgress(): void {
    setTimeout(() => {
      if (this.lineProgressRef) {
        this.renderer.setStyle(
          this.lineProgressRef.nativeElement,
          'width',
          `${this.ngxPercent}%`
        );

        this.renderer.setStyle(
          this.lineProgressRef.nativeElement,
          'background-color',
          this.ngxColor
        );

        this.renderer.setStyle(
          this.lineProgressRef.nativeElement,
          'transition',
          `width ${this.ngxTimer}s ease-in-out`
        );
      }
    });

    this.cdr.markForCheck();
  }
}
