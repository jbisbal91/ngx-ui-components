import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-demo1',
  templateUrl: './radio-demo1.component.html',
  styleUrls: ['./radio-demo1.component.scss'],
})
export class RadioDemo1Component {
  radioGroupValue = 'A'
  radioValueA = true;
  radioValueB = false;
  radioValueC = false;
}
