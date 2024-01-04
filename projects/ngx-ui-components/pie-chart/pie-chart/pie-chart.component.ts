import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PieChart } from '../models';

@Component({
  selector: 'ngx-pie-chart',
  templateUrl: './pie-chart.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartComponent implements OnInit {
  @ViewChild('pieChartCanvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  context: CanvasRenderingContext2D | null = null;
  @Input() width = 300;
  @Input() height = 300;
  @Input() value: PieChart[] = [];

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

      let inicioAngulo = -Math.PI / 2;

      for (let i = 0; i < value.length; i++) {
        const porcentaje = value[i].value / total;
        const angulo = Math.PI * 2 * porcentaje;

        ctx.beginPath();
        ctx.moveTo(centroX, centroY);
        ctx.arc(centroX, centroY, radio, inicioAngulo, inicioAngulo + angulo);
        ctx.closePath();
        ctx.fillStyle = value[i].color;
        ctx.fill();

        inicioAngulo += angulo;
      }
    } else {
      console.error('Contexto 2D nulo.');
    }
  }

  drawPieChart2(valores: number[], colores: string[]) {
    const ctx = this.context;

    if (ctx) {
      const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
      const centroX = canvasEl.width / 2;
      const centroY = canvasEl.height / 2;
      const radio = Math.min(canvasEl.width, canvasEl.height) / 2 - 10;
      const total = valores.reduce((acc, val) => acc + val, 0);

      let inicioAngulo = -Math.PI / 2;

      for (let i = 0; i < valores.length; i++) {
        const porcentaje = valores[i] / total;
        const angulo = Math.PI * 2 * porcentaje;

        ctx.beginPath();
        ctx.moveTo(centroX, centroY);
        ctx.arc(centroX, centroY, radio, inicioAngulo, inicioAngulo + angulo);
        ctx.closePath();
        ctx.fillStyle = colores[i];
        ctx.fill();

        inicioAngulo += angulo;
      }
    } else {
      console.error('Contexto 2D nulo.');
    }
  }
}
