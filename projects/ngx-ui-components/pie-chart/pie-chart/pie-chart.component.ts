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

        // Logic to determine which part of the graph the mouse corresponds to
        const partChartId = this.detectPart(mouseX, mouseY);
        this.canvas.nativeElement.style.cursor =
          partChartId !== -1 ? 'pointer' : 'default';
        this.drawPieChart(this.value, partChartId);
      });

      this.cdr.detectChanges();
    });
  }

  drawPieChart(value: PieChart[], partGraphId: number = -1) {
    const ctx = this.context;
    if (ctx) {
      const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      const centerX = canvasEl.width / 2;
      const centerY = canvasEl.height / 2;
      const defaultRadius = Math.min(canvasEl.width, canvasEl.height) / 2 - 10;
      const increasedRadius = defaultRadius + defaultRadius * 0.06; // Aumentar el radio para la porción
      const total = this.value.reduce(
        (total, currentValue) => total + currentValue.value,
        0
      );
      let initAngle = 0;
      for (let i = 0; i < value.length; ++i) {
        const percent = value[i].value / total;
        const angle = Math.PI * 2 * percent;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        // Utilizar el radio aumentado para la porción específica
        const radius =
          partGraphId !== -1 && partGraphId === i
            ? increasedRadius
            : defaultRadius;
        ctx.arc(centerX, centerY, radius, initAngle, initAngle + angle);
        ctx.closePath();
        if (
          partGraphId !== -1 &&
          partGraphId === i &&
          increasedRadius > defaultRadius
        ) {
          ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
          ctx.shadowBlur = 6;
        } else {
          ctx.shadowBlur = 0;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
        }

        ctx.fillStyle = value[i].color;
        ctx.fill();
        initAngle += angle;
      }
      this.drawRing(centerX, centerY, defaultRadius);
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

  detectPart(mouseX: number, mouseY: number): number {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    const centroX = canvasEl.width / 2 - 10;
    const centroY = canvasEl.height / 2 - 10;
    const radius = Math.min(canvasEl.width, canvasEl.height) / 2 - 10;
    const total = this.value.reduce(
      (total, currentValue) => total + currentValue.value,
      0
    );
    //calculates the central angle formed with the mouse pointer
    const angleExt = Math.atan2(mouseY - centroY, mouseX - centroX);
    //calculate the distance between the pointer and the center of the circle
    const distance = Math.sqrt(
      (mouseX - centroX) ** 2 + (mouseY - centroY) ** 2
    );
    // Check if the pointer is inside the circle
    if (distance <= radius && this.detectFill(mouseX, mouseY)) {
      let initAngle = 0;
      for (let i = 0; i < this.value.length; i++) {
        const percent = this.value[i].value / total;
        const angle = Math.PI * 2 * percent;
        initAngle += angle;
        // Check if the angle of the pointer is in this portion
        if (this.radianToDegree(initAngle) >= this.radianToDegree(angleExt)) {
          return i; // Returns the part of the graph
        }
      }
    }
    return -1; // If it is not within the graph
  }

  radianToDegree(rad: number) {
    return rad >= 0 ? rad * (180 / Math.PI) : 360 + rad * (180 / Math.PI);
  }

  detectFill(mouseX: number, mouseY: number): boolean {
    const ctx = this.context;
    if (ctx) {
      // Get the image data in a small area around the mouse point
      const imageData = ctx.getImageData(mouseX - 1, mouseY - 1, 2, 2); // Small area around the mouse pointer
      // Check if any pixel in the area has a color other than transparent
      for (let i = 0; i < imageData.data.length; i += 4) {
        // Check if channels R, G, B are different from 0 (transparent)
        if (
          imageData.data[i] !== 0 ||
          imageData.data[i + 1] !== 0 ||
          imageData.data[i + 2] !== 0
        ) {
          return true; // Area has colored pixels, it is filled
        }
      }
    }
    return false; // The area is empty or transparent
  }
}
