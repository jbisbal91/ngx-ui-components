import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, numberAttribute } from '@angular/core';
import { NgForOf, NgIf, NgStyle } from '@angular/common';


interface ColumnChart {
  value: number;
  label: string;
  color?: string;
}

interface YValue {
  value: number;
  label: string;
}

@Component({
  selector: 'ngx-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss'],
  standalone: true,
  imports: [NgForOf, NgStyle, NgIf],
})
export class ColumnChartComponent implements OnInit, AfterViewInit {

  @ViewChild('myCanvas', { static: false }) myCanvas!: ElementRef<HTMLCanvasElement>;
  private context: CanvasRenderingContext2D | null = null;

  width: number = 600;
  height: number = 500;

  @Input() value: ColumnChart[] = [];
  @Input() yValue: YValue[] = [];
  @Input({ transform: numberAttribute }) barSpacing: number = 40;
  @Input({ transform: numberAttribute }) barWidth: number = 40;
  @Input({ transform: numberAttribute }) axisOffset: number = 40;
  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.context = this.myCanvas.nativeElement.getContext('2d');
    const length = this.value.length;
    this.width = (length * this.barWidth) + ((length - 1) * this.barSpacing) + this.axisOffset +20;
    this.height = this.yValue.length * 78;
    setTimeout(() => {
      this.drawChart();
    });
  }

  drawChart(): void {
    if (!this.context) {
      return;
    }
    const canvasHeight = this.myCanvas.nativeElement.height;
    const canvasWidth = this.myCanvas.nativeElement.width;
    this.context.clearRect(0, 0, canvasWidth, canvasHeight);
    this.context.font = "14px Arial";
    this.context.fillStyle = '#595959';
    this.context.strokeStyle = '#595959'
    // Draw y axis
    this.context.beginPath();
    this.context.moveTo(this.axisOffset, 0); // Change this to axisOffset
    this.context.lineTo(this.axisOffset, canvasHeight - 50); // Change this to axisOffset
    this.context.stroke();

    // Draw y axis values and horizontal lines
    this.yValue.forEach((value, i) => {
      if (!this.context) {
        return;
      }
      const y = canvasHeight - value.value * 4 - 50; // Adjust y position to account for x axis and scale
      this.context.textBaseline = 'middle'; // Align the text in the middle vertically
      this.context.textAlign = 'right';
      this.context.fillText(value.label.toString(), this.axisOffset - 10, y); // Draw value 30px to the left of y axis

      // Draw horizontal line
      this.context.beginPath();
      this.context.moveTo(this.axisOffset, y); // Change this to axisOffset
      this.context.lineTo(canvasWidth, y);
      this.context.stroke();
    });

    // Draw x axis
    this.context.beginPath();
    this.context.moveTo(this.axisOffset, canvasHeight - 50); // Change this to axisOffset
    this.context.lineTo(canvasWidth, canvasHeight - 50);
    this.context.stroke();

    const startX = this.axisOffset + 10; // Calculate the starting x position for the bars

    // Draw bars and x axis labels
    this.value.forEach((d, i) => {
      const barHeight = d.value * 4;
      const x = startX + i * (this.barWidth + this.barSpacing); // Calculate the x position for each bar
      const y = canvasHeight - barHeight - 50; // Adjust y position to account for x axis

      if (!this.context) {
        return;
      }
      this.context.fillStyle = d.color || '#ba7735';
      this.context.fillRect(x, y, this.barWidth, barHeight);

      // Draw x axis label
      this.context.save();
      this.context.fillStyle = '#595959';
      this.context.translate(x + this.barWidth / 2, canvasHeight - 30); // Move to the position where the label will be drawn
      this.context.rotate(0); // Rotate 0 degrees (horizontal)
      this.context.textAlign = 'center'; // Set text alignment to center
      this.context.fillText(d.label, 0, 0); // Draw label at the new origin
      this.context.restore(); // Restore the context to its original state
    });
  }
}