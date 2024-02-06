import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-rate',
  template: `
    <div class="rate-container">
      <canvas
        #rateCanvas
        width="200"
        height="40"
        (click)="onCanvasClick($event)"
      ></canvas>
    </div>
  `,
  standalone: true,
})
export class RateComponent implements OnInit {
  @ViewChild('rateCanvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  context: CanvasRenderingContext2D | null = null;
  selectedStar: number = -1;
  stars: boolean[] = [false, false, false, false, false]; // Estado de las estrellas (true = seleccionada, false = no seleccionada)

  ngOnInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.drawStars();
    this.canvas.nativeElement.addEventListener('mousemove', (event) => {
      this.onMouseMove(event);
    });
  }

  onMouseMove(event: MouseEvent) {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    let index = this.selectedStar; // Inicializar index como -1 por defecto

    // Verificar si la posición y está dentro del rango de las estrellas
    if (y >= 3 && y <= 33 && x < rect.width && y < rect.height) {
      // Verificar la posición x en cada estrella
      if (x >= 3 && x <= 35) {
        index = 0;
      } else if (x >= 44 && x <= 75) {
        index = 1;
      } else if (x >= 84 && x <= 115) {
        index = 2;
      } else if (x >= 124 && x <= 155) {
        index = 3;
      } else if (x >= 164 && x <= 195) {
        index = 4;
      }
    }
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.context?.clearRect(0, 0, canvasEl.width, canvasEl.height);
    this.stars = this.stars.map((star, i) => i <= index);
    this.drawStars(); // Volver a dibujar las estrellas con el nuevo estado
  }

  onCanvasClick(event: MouseEvent) {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const index = Math.floor(x / 40);    
    this.selectedStar = index;
    this.onStarClick(index);
  }

  drawStars() {
    const starRadius = 16; // Radio de las estrellas
    const spacing = 40; // Espaciado entre estrellas
    const startY = 20; // Posición Y de las estrellas

    for (let i = 0; i < 5; i++) {
      const startX = 20 + spacing * i; // Posición X de cada estrella
      this.drawStar(
        startX,
        startY,
        5,
        starRadius,
        starRadius / 2,
        this.stars[i]
      ); // Dibujar una estrella
    }
  }

  drawStar(
    cx: number,
    cy: number,
    spikes: number,
    outerRadius: number,
    innerRadius: number,
    filled: boolean
  ) {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;
    if (this.context) {
      this.context.beginPath();
      this.context.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        this.context.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        this.context.lineTo(x, y);
        rot += step;
      }
      this.context.lineTo(cx, cy - outerRadius);
      this.context.closePath();

      // Relleno de la estrella
      if (filled) {
        this.context.fillStyle = '#FADB14'; // Color de la estrella seleccionada
        this.context.fill();
      }

      this.context.lineWidth = 1;
      this.context.strokeStyle = '#FADB14'; // Color del borde de la estrella
      this.context.stroke();
    }
  }

  // Método para cambiar el estado de la calificación al hacer clic en una estrella
  onStarClick(index: number) {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.context?.clearRect(0, 0, canvasEl.width, canvasEl.height);
    this.stars = this.stars.map((star, i) => i <= index);
    this.drawStars(); // Volver a dibujar las estrellas con el nuevo estado
    console.log(index);
  }
}
