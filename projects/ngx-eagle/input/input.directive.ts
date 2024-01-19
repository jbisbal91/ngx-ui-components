import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: 'input[ngx-input]',
  host: {
    class: 'ngx-input',
    '(input)': 'onInputChange($event)',
  },
  standalone: true,
})
export class InputDirective implements OnInit, AfterViewInit {
  inputFocus = false;
  inputValue = '';
  labelNode: any;
  //inputNode: any;
  placeholder: string = '';

  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.getLabelNode();
  }

  getLabelNode() {
    const adjacentNodes = this.elementRef.nativeElement.parentElement.children;
    for (let i = 0; i < adjacentNodes.length; ++i) {
      if (adjacentNodes[i].nodeName.toLowerCase() === 'label') {
        this.labelNode = adjacentNodes[i];
      }
      if (adjacentNodes[i].nodeName.toLowerCase() === 'input') {
        //this.inputNode = adjacentNodes[i];
      }
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.placeholder = this.elementRef.nativeElement.placeholder;
      this.inputValue = this.elementRef.nativeElement.value;
      this.positionLabel();
    });
    this.elementRef.nativeElement.addEventListener('focus', () => {
      console.log('Se ha realizado el focus en el input');
      this.inputFocus = true;
      this.positionLabel();
    });
    this.elementRef.nativeElement.addEventListener('blur', () => {
      console.log('Se ha quitado el focus del input');
      this.inputFocus = false;
      this.positionLabel();
    });
  }

  onInputChange(event: Event): void {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.positionLabel();
  }

  positionLabel() {
    if (this.inputFocus || this.inputValue !== '') {
      console.log('label arriba');
      this.labelNode.style.transform = 'translateY(0px)';
      this.labelNode.style.transition = 'transform ease-in-out 0.125s';
      this.elementRef.nativeElement.placeholder = this.placeholder;
    } else {
      console.log('label al centro');
      this.labelNode.style.transform = 'translateY(1rem)';
      this.labelNode.style.transition = 'transform ease-in-out 0.125s';
      this.elementRef.nativeElement.placeholder = '';
    }
  }
}
