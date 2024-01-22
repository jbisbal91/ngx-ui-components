import {
  AfterViewInit,
  Directive,
  ElementRef,
  Host,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
} from '@angular/core';
import { FormFieldComponent } from './form-field.component';
import { Subscription } from 'rxjs';
import { NgxFillMode, NgxSize } from './typings';

@Directive({
  selector: 'input[ngx-input]',
  host: {
    class: 'ngx-input',
    '(input)': 'onInputChange($event)',
  },
  standalone: true,
})
export class InputDirective implements OnInit, OnDestroy, AfterViewInit {
  inputFocus = false;
  inputValue = '';
  labelNode: any;
  placeholder: string = '';
  ngxSize: NgxSize = 'medium';
  ngxFillMode: NgxFillMode = 'filled';
  private subscription: Subscription = new Subscription();

  constructor(
    public elementRef: ElementRef,
    @Optional() @Host() public formFieldComponent: FormFieldComponent
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.placeholder = this.elementRef.nativeElement.placeholder;
      this.getLabelNode();
    });
    this.subscription.add(
      this.formFieldComponent?.ngxSize$.subscribe((ngxSize) => {
        setTimeout(() => {
          this.positionLabel();
        });
      })
    );
    this.subscription.add(
      this.formFieldComponent?.ngxFillMode$.subscribe((ngxFillMode) => {
        this.ngxFillMode = ngxFillMode;
        setTimeout(() => {
          this.positionLabel();
        });
      })
    );
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.inputValue = this.elementRef.nativeElement.value;
      this.positionLabel();
    });
    this.elementRef.nativeElement.addEventListener('focus', () => {
      this.inputFocus = true;
      this.positionLabel();
    });
    this.elementRef.nativeElement.addEventListener('blur', () => {
      this.inputFocus = false;
      this.positionLabel();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getLabelNode() {
    const adjacentNodes = this.elementRef.nativeElement.parentElement.children;
    for (let i = 0; i < adjacentNodes.length; ++i) {
      if (adjacentNodes[i].nodeName.toLowerCase() === 'label') {
        this.labelNode = adjacentNodes[i];
      }
    }
  }

  onInputChange(event: Event): void {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.positionLabel();
  }

  positionLabel() {
    if (this.labelNode) {
      this.labelNode.style.position = 'absolute';
      this.labelNode.style.transition = 'top ease-in-out 0.125s';
      if (this.inputFocus || this.inputValue !== '') {
        const top = this.ngxFillMode === 'outlined' ? '-0.375rem ' : '0px';
        this.labelNode.style.top = top;
        this.labelNode.style.color = 'var(--ngx-comp-form-field-filled-border-color)';
        this.labelNode.style.fontSize = '0.75rem';
        this.elementRef.nativeElement.placeholder = this.placeholder;
        setTimeout(() => {
          if (this.ngxFillMode === 'outlined') {
            this.drawDashedTopBorder();
          }
        });
      } else {
        this.labelNode.style.top = `${this.translateY()}rem`;
        this.labelNode.style.color = 'currentColor';
        this.labelNode.style.fontSize = '1rem';
        this.elementRef.nativeElement.placeholder = '';
        this.drawLineTopBorder();
      }
    }
  }

  //Calcula la posicion en la que esta la etiqueta con respetco al tope de form field
  translateY() {
    const formFieldHeight =
      this.elementRef.nativeElement.parentElement.offsetHeight;
    return (formFieldHeight * 0.333) / 16;
  }

  drawLineTopBorder() {
    const background =
      this.ngxFillMode === 'outlined'
        ? 'linear-gradient(to right, transparent 0%, currentColor 0%) no-repeat top/100% 1px'
        : 'none';
    const borderColor = `transparent currentColor currentColor`;
    this.elementRef.nativeElement.parentElement.style.borderColor = borderColor;
    this.elementRef.nativeElement.parentElement.style.background = background;
  }

  //Genera el border top con el espacio necesario para insertar la etiqueta cuando esta en modo outlined
  drawDashedTopBorder() {
    const formFieldWidth =
      this.elementRef.nativeElement.parentElement.offsetWidth;
    const labelWidth = this.labelNode.offsetWidth;
    const percent = ((labelWidth + 10) / formFieldWidth) * 100;
    const color = this.inputFocus
      ? 'var(--ngx-comp-form-field-filled-border-color)'
      : 'currentColor'; // si esta el input con el focus activo coloca el color que le corresponde
    const background = `linear-gradient(to right, ${color} 5px, transparent 5px, transparent ${percent}%, ${color} ${percent}%) no-repeat top/100% 1px`;
    const borderColor = `transparent ${color} ${color}`;
    this.elementRef.nativeElement.parentElement.style.borderColor = borderColor;
    this.elementRef.nativeElement.parentElement.style.background = background;
  }
}
