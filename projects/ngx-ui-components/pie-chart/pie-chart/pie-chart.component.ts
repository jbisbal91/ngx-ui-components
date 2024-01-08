import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  numberAttribute,
} from '@angular/core';
import { PieChart } from '../models';
import { NgForOf, NgStyle } from '@angular/common';

@Component({
  selector: 'ngx-pie-chart',
  templateUrl: './pie-chart.component.html',
  standalone: true,
  host: {
    class: 'ngx-pie-chart',
  },
  imports: [NgForOf, NgStyle],
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

  @Output() partChartIndex = new EventEmitter<number>();

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
        this.partChartIndex.emit(partChartId);
        this.canvas.nativeElement.style.cursor =
          partChartId !== -1 ? 'pointer' : 'default';
        this.drawPieChart(this.value, partChartId);
      });

      this.cdr.detectChanges();
    });
  }

  mouseenter(val: PieChart) {
    const partChartId = this.value.findIndex((v) => v === val);
    this.partChartIndex.emit(partChartId);
    this.drawPieChart(this.value, partChartId);
  }

  mouseleave() {
    this.partChartIndex.emit(-1);
    this.drawPieChart(this.value, -1);
  }

  /**
   * Create the graph
   * @param value is of type PieChart[], partGraphId will be the id obtained by hovering the mouse
   * over each part of the graph.
   */
  drawPieChart(value: PieChart[], partGraphId: number = -1) {
    const ctx = this.context;
    if (ctx) {
      const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      const centerX = canvasEl.width / 2;
      const centerY = canvasEl.height / 2;
      const defaultRadius = Math.min(canvasEl.width, canvasEl.height) / 2 - 10;
      const increasedRadius = defaultRadius + defaultRadius * 0.06; // Increase radius for portion
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
        // Use the increased radius for the specific portion
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
      this.buildCenteredText(value, total, partGraphId, centerX, centerY);
    } else {
      console.error('Null 2D context.');
    }
  }

  /**
   * Build the text that will be centered in the graphic
   * @param The value is of type PieChart[], total is the sum of all the values of PieChart[],
   * partGraphId will be the id obtained by hovering the mouse, centerX and centerY is the center of the graph
   */
  buildCenteredText(
    value: PieChart[],
    total: number,
    partGraphId: number = -1,
    centerX: number,
    centerY: number
  ) {
    const ctx = this.context;
    //Check if the graph can have space in the center
    if (ctx && partGraphId !== -1 && this.ngxGutter > 0 && this.ngxGutter < 1) {
      const percent = (value[partGraphId].value / total) * 100;
      const text = value[partGraphId].label + '\n' + percent.toFixed(2) + '%';
      const font = '12px Arial';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      //Add text in the center of the graph
      this.drawCenteredText(
        text,
        centerX,
        centerY,
        font,
        value[partGraphId].color
      );
    }
  }

  /**
   * Adds a ring in the center of the graph the value depends on ngGutter [0-1]
   * @param Radius of the graph, centerX and centerY is the center of the graph
   */
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

  /**
   * Builds the text and centers it in the empty space in the center of the graphic
   * @param text that will be added in the center of the graph, color is the color of
   * the text that matches the color of the part of the graph that is selected,
   * centerX and centerY is the center of the graph
   */
  drawCenteredText(
    text: string,
    centerX: number,
    centerY: number,
    font: string,
    color = 'black'
  ) {
    const ctx = this.context;
    if (ctx) {
      const allText = text.split('\n');
      ctx.font = font;
      ctx.fillStyle = color;
      allText.forEach((txt, index) => {
        const medidaTexto = ctx.measureText(txt);
        const textWidth = medidaTexto.width;
        const xPos = centerX - textWidth / 2; //Adjust to center horizontally
        ctx.fillText(txt, xPos, centerY - (txt.length - 1) / 2 + index * 15);
      });
    }
  }

  //Determines if the mouse pointer is on top of the graph
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
