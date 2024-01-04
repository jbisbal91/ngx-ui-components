import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PieChart } from '../models';

@Component({
  selector: 'ngx-pie-chart',
  templateUrl: './pie-chart.component.html',
})
export class PieChartComponent implements OnInit {
  @ViewChild('pieChartCanvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  context: CanvasRenderingContext2D | null = null;

  @Input() value!: PieChart;

  ngOnInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.dibujarGraficoCircular(
      [30, 20, 25, 15, 10],
      ['#f00', '#0f0', '#00f', '#ff0', '#f0f']
    );
  }

  dibujarGraficoCircular(valores: number[], colores: string[]) {
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
