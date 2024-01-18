import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { NgxFillMode, NgxSize } from './typings';

@Directive({
  selector: 'input[ngx-input]',
  host: {
    class: 'ngx-input',
  },
  standalone: true,
})
export class InputDirective implements OnInit {


  newDiv = document.createElement('div');

  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    // Crear un div overlay
    const overlayDiv = this.renderer2.createElement('div');

    // Agregar clases y estilos al div overlay (puedes personalizar según tus necesidades)
    this.renderer2.addClass(overlayDiv, 'ngx-input-sm');
    this.renderer2.setStyle(overlayDiv, 'position', 'relative');

    // Obtener el input y su valor actual
    const inputElement = this.elementRef.nativeElement;
    const inputValue = inputElement.value;

    // Crear un nodo de texto con el valor del input
    const textNode = this.renderer2.createText(inputValue);

    // Agregar el texto al div overlay
    this.renderer2.appendChild(overlayDiv, textNode);

  }
}
