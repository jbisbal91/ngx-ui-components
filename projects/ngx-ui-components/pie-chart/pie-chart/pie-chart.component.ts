import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  numberAttribute,
} from '@angular/core';
import { PieChart } from '../models';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'ngx-pie-chart',
  templateUrl: './pie-chart.component.html',
  standalone: true,
  imports: [NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartComponent implements OnInit {
  @ViewChild('pieChartCanvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  context: CanvasRenderingContext2D | null = null;
  @Input() width = 300;
  @Input() height = 300;
  @Input() value: PieChart[] = [];
  @Input({ transform: numberAttribute }) ngxGutter: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    setTimeout(() => {
      this.drawPieChart(this.value);
      this.cdr.detectChanges();
    });
  }

  drawPieChart(value: PieChart[]) {
    const ctx = this.context;
    if (ctx) {
      const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
      const centroX = canvasEl.width / 2;
      const centroY = canvasEl.height / 2;
      const radio = Math.min(canvasEl.width, canvasEl.height) / 2 - 10;
      const total = this.value.reduce(
        (total, currentValue) => total + currentValue.value,
        0
      );

      let initAngle = -Math.PI / 2;

      for (let i = 0; i < value.length; i++) {
        const porcentaje = value[i].value / total;
        const angle = Math.PI * 2 * porcentaje;

        ctx.beginPath();
        ctx.moveTo(centroX, centroY);
        ctx.arc(centroX, centroY, radio, initAngle, initAngle + angle);
        ctx.closePath();
        ctx.fillStyle = value[i].color;
        ctx.fill();
        initAngle += angle;
      }

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(centroX, centroY, radio * this.ngxGutter, 0, 2 * Math.PI);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
    } else {
      console.error('Null 2D context.');
    }
  }
}
