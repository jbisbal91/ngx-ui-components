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
import { GuidService } from './guid.service';

@Component({
  selector: 'ngx-radio-button',
  template: `
    <input
      #input_radio_button
      [id]="id"
      type="radio"
      [checked]="checked"
      [disabled]="disabled"
      [value]="ngxValue"
    />
    <label [for]="id"><ng-content></ng-content></label>
  `,
  host: {
    class: 'ngx-radio-button',
  },
  standalone: true,
})
export class RadioButtonComponent implements AfterViewChecked, AfterViewInit {
  @Input() checked: boolean = false;
  @Input() ngxColor: string | undefined | null = '#1890FF';
  @Input() ngxValue: string = '';
  disabled: boolean = false;

  @ViewChild('input_radio_button') inputRadioRef!: ElementRef;

  public id: string = '';
  constructor(
    private guidService: GuidService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.id = 'ngx-radio-button' + this.guidService.guid() + '-input';
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
