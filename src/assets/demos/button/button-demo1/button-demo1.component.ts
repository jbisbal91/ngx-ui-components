import { Component } from '@angular/core';
import { NgxFillMode, NgxRounded, NgxSize } from 'projects/ngx-eagle/button';

@Component({
  selector: 'app-button-demo1',
  templateUrl: './button-demo1.component.html',
  styleUrls: ['./button-demo1.component.scss'],
})
export class ButtonDemo1Component {
  size: NgxSize = 'medium';
  rounded: NgxRounded = 'medium';
  fillMode: NgxFillMode = 'filled';
  disabled = false;
}
