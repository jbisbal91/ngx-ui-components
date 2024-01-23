import {
  AfterViewInit,
  Directive,
  ElementRef,
  Host,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import { FormFieldComponent } from './form-field.component';
import { Subscription } from 'rxjs';
import { NgxFillMode, NgxSize } from './typings';
import { FormControl, NgControl } from '@angular/forms';

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
  formFieldNode: any;
  labelNode: any;
  placeholder: string = '';
  valid: boolean = true;
  ngxSize: NgxSize = 'medium';
  ngxFillMode: NgxFillMode = 'filled';
  private subscription: Subscription = new Subscription();

  constructor(
    public elementRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl,
    @Optional() @Host() public formFieldComponent: FormFieldComponent
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.placeholder = this.elementRef.nativeElement.placeholder;
      this.formFieldNode = this.elementRef.nativeElement.parentElement;
      this.getNgxLabelNode();
      console.log(this.ngControl);
    });
    this.subscription.add(
      this.formFieldComponent?.ngxSize$.subscribe((ngxSize) => {
        setTimeout(() => {
          this.setPositionLabel();
        });
      })
    );
    this.subscription.add(
      this.formFieldComponent?.ngxFillMode$.subscribe((ngxFillMode) => {
        this.ngxFillMode = ngxFillMode;
        setTimeout(() => {
          this.setPositionLabel();
          this.drawLineTopBorder();
        });
      })
    );
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.inputValue = this.elementRef.nativeElement.value;
      this.setPositionLabel();
    });
    //Se lanza el evento cuando se esta haciendo focus en el input
    this.elementRef.nativeElement.addEventListener('focus', () => {
      this.inputFocus = true;
      this.validity();
      this.setPositionLabel();
    });
    //Se lanza el evento cuando se desenfoca del input
    this.elementRef.nativeElement.addEventListener('blur', () => {
      this.inputFocus = false;
      this.validity();
      this.setPositionLabel();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //Obtiene el contenido del label correspondiente a la directiva ngx-label
  getNgxLabelNode() {
    const adjacentNodes = this.formFieldNode.children;
    for (let i = 0; i < adjacentNodes.length; ++i) {
      if (adjacentNodes[i].nodeName.toLowerCase() === 'label') {
        this.labelNode = adjacentNodes[i];
      }
    }
  }

  onInputChange(event: Event): void {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.validity();
    this.setPositionLabel();
  }

  setPositionLabel() {
    if (this.labelNode) {
      if (this.inputFocus || this.inputValue !== '') {
        const top = this.ngxFillMode === 'outlined' ? '-0.375rem ' : '0px';
        this.labelNode.style.top = top;
        this.labelNode.style.color = this.valid
          ? 'var(--ngx-comp-form-field-filled-border-color)'
          : '#F44336';
        this.labelNode.style.fontSize = '0.75rem';
        this.elementRef.nativeElement.placeholder = this.placeholder;
        setTimeout(() => {
          if (this.ngxFillMode === 'outlined') {
            this.buildBorderOutlined();
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

  //Calcula la posicion en la que esta la etiqueta con respecto al tope de form field
  translateY() {
    const formFieldHeight = this.formFieldNode.offsetHeight;
    return (formFieldHeight * 0.333) / 16;
  }

  drawLineTopBorder() {
    const background =
      this.ngxFillMode === 'outlined'
        ? 'linear-gradient(to right, transparent 0%, currentColor 0%) no-repeat top/100% 1px'
        : 'none';
    const borderColor = `transparent currentColor currentColor`;
    this.formFieldNode.style.borderColor = borderColor;
    this.formFieldNode.style.background = background;
  }

  //Genera el border top con el espacio necesario para insertar la etiqueta cuando esta en modo outlined
  buildBorderOutlined() {
    const formFieldWidth = this.formFieldNode.offsetWidth;
    const labelWidth = this.labelNode.offsetWidth;
    const percent = ((labelWidth + 10) / formFieldWidth) * 100;
    let color = this.valid // validacion
      ? this.inputFocus // si esta el input con el focus activo coloca el color que le corresponde
        ? 'var(--ngx-comp-form-field-filled-border-color)'
        : 'currentColor'
      : '#F44336';
    const background = `linear-gradient(to right, ${color} 5px, transparent 5px, transparent ${percent}%, ${color} ${percent}%) no-repeat top/100% 1px`;
    const borderColor = `transparent ${color} ${color}`;
    this.formFieldNode.style.borderColor = borderColor;
    this.formFieldNode.style.background = background;
  }

  validity() {
    //this.valid = this.elementRef.nativeElement.validity.valid;
    this.valid = this.ngControl
      ? this.ngControl.status?.toLowerCase() === 'valid'
        ? true
        : false
      : this.elementRef.nativeElement.validity.valid;
    console.log('valid', this.valid);
    //console.log('ngControl', this.ngControl.status);

    this.formFieldNode.style.color = this.valid ? 'currentColor' : '#F44336';
    this.elementRef.nativeElement.style.color = this.valid
      ? 'var(--ngx-comp-form-field-filled-border-color)'
      : '#F44336';
  }
}
