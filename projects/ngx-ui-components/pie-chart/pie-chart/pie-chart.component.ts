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

      this.canvas.nativeElement.addEventListener('mousemove', (event) => {
        const rect = this.canvas.nativeElement.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Aquí realiza tu lógica para determinar a qué parte del gráfico corresponde el mouse
        const parteDelGrafico = this.detectarParteDelGrafico(mouseX, mouseY);
        console.log('Parte del gráfico:', parteDelGrafico);
      });

      this.cdr.detectChanges();
    });
  }

  drawPieChart(value: PieChart[]) {
    const ctx = this.context;
    if (ctx) {
      const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
      const centerX = canvasEl.width / 2;
      const centerY = canvasEl.height / 2;
      const radius = Math.min(canvasEl.width, canvasEl.height) / 2 - 10;
      const total = this.value.reduce(
        (total, currentValue) => total + currentValue.value,
        0
      );

      let initAngle = -Math.PI / 2;

      for (let i = 0; i < value.length; i++) {
        const percent = value[i].value / total;
        const angle = Math.PI * 2 * percent;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, initAngle, initAngle + angle);
        ctx.closePath();
        ctx.fillStyle = value[i].color;
        ctx.fill();
        initAngle += angle;
      }
      this.drawRing(centerX, centerY, radius);
    } else {
      console.error('Null 2D context.');
    }
  }

  drawRing(centerX: number, centerY: number, radius: number) {
    const ctx = this.context;
    if (ctx) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * this.ngxGutter, 0, 2 * Math.PI);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
    }
  }

  detectarParteDelGrafico(mouseX: number, mouseY: number): string {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    const centroX = canvasEl.width / 2;
    const centroY = canvasEl.height / 2;
    const radio = Math.min(canvasEl.width, canvasEl.height) / 2 - 10;
    const total = this.value.reduce(
      (total, currentValue) => total + currentValue.value,
      0
    );
    // Calcula el ángulo y la distancia desde el centro del círculo hasta el puntero del mouse
    const angulo = Math.atan2(mouseY - centroY, mouseX - centroX);
    const distancia = Math.sqrt(
      (mouseX - centroX) ** 2 + (mouseY - centroY) ** 2
    );

    // Verifica si el puntero está dentro del círculo
    if (distancia >= 10 && distancia <= radio) {
      let initAngle = -Math.PI / 2;

      for (let i = 0; i < this.value.length; i++) {
        const porcentaje = this.value[i].value / total;
        const angle = Math.PI * 2 * porcentaje;

        // Verifica si el ángulo del puntero está en esta porción
        if (angulo <= initAngle && angulo <= initAngle + angle) {
          return `Parte ${i}`; // Retorna la parte del gráfico
        }

        initAngle += angle;
      }
    }

    return 'Fuera del gráfico'; // Si no está dentro del gráfico
  }
}
