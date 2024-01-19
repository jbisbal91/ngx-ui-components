import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

import { InputService } from './service/input.service';

@Directive({
  selector: 'input[ngx-input]',
  host: {
    class: 'ngx-input',
    '[class.ngx-input-focus]': 'inputFocus',
    '(input)': 'onInputChange($event)',
  },
  standalone: true,
  providers: [InputService],
})
export class InputDirective implements AfterViewInit {
  inputFocus = false;
  inputValue = '';
  constructor(
    public elementRef: ElementRef,
    private renderer2: Renderer2,
    private inputService: InputService
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.inputValue = this.elementRef.nativeElement.value;
      this.inputService.setCurrentValue(this.inputValue);
      this.inputFocus = this.inputValue !== '' ? true : false;
    });
    this.elementRef.nativeElement.addEventListener('focus', () => {
      console.log('Se ha realizado el focus en el input');
      const value = this.elementRef.nativeElement.value;
      this.inputFocus = true;
      if (value === '') {
        this.inputService.setFocus(true);
      }
    });
    this.elementRef.nativeElement.addEventListener('blur', () => {
      this.inputFocus = false;
      console.log('Se ha quitado el focus del input');
      this.inputService.setFocus(false);
    });
  }

  onInputChange(event: Event): void {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.inputService.setCurrentValue(this.inputValue);
    this.inputFocus = this.inputValue !== '' ? true : false;
  }
}
