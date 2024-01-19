import { Component } from '@angular/core';

@Component({
  selector: 'app-input-demo1',
  templateUrl: './input-demo1.component.html',
  styleUrls: ['./input-demo1.component.scss'],
})
export class InputDemo1Component {
  ngxSize: any = 'medium';
  ngxRounded: any = 'medium';
  ngxFillMode: any = 'filled';
  input1 = '';
  input2 = '';
}
