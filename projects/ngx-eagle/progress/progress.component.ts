import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
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

  @ViewChild('line_progress_inner') lineProgressRef!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    setTimeout(()=> {
      if (this.lineProgressRef) {
        this.lineProgressRef.nativeElement.style.width = `${this.ngxPercent}%`;
        this.lineProgressRef.nativeElement.style.backgroundColor = this.ngxColor;
      }
    })
    this.cdr.markForCheck();
  }
}
