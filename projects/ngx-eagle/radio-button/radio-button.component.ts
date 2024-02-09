import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-radio-button',
  template: ` <input
    #input_radio_button
    type="radio"
    [checked]="checked"
  />`,
  host: {
    class: 'ngx-radio-button',
  },
  standalone: true,
})
export class RadioButtonComponent {
  @Input() checked: boolean = false;


}
