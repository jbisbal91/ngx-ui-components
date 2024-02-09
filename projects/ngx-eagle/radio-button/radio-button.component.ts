import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ngx-radio-button',
  template: ` <input
    #input_radio_button
    type="radio"
    [checked]="checked"
    [disabled]="disabled"
  />`,
  host: {
    class: 'ngx-radio-button',
  },
  standalone: true,
})
export class RadioButtonComponent implements AfterViewChecked, AfterViewInit {
  @Input() checked: boolean = false;
  @Input() ngxColor: string | undefined | null = '#1890FF';
  disabled: boolean = false;

  @ViewChild('input_radio_button') inputRadioRef!: ElementRef;

  constructor(
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.disabled = elementRef.nativeElement.hasAttribute('disabled');
  }

  ngAfterViewChecked(): void {
    this.setAccentColor();
  }

  ngAfterViewInit(): void {
    this.setAccentColor();
  }

  setAccentColor() {
    this.renderer.setStyle(
      this.inputRadioRef.nativeElement,
      'accent-color',
      this.disabled ? '#9E9E9E' : this.ngxColor
    );
  }
}
