import { Component } from '@angular/core';
import { NgxFillMode, NgxRounded, NgxSize } from 'projects/ngx-eagle/select/typings';

@Component({
  selector: 'app-select-demo1',
  templateUrl: './select-demo1.component.html',
  styleUrls: ['./select-demo1.component.scss']
})
export class SelectDemo1Component {
  ngxSize: NgxSize = 'medium';
  ngxRounded: NgxRounded = 'medium';
  ngxFillMode: NgxFillMode = 'filled';
  input = '';  
  disabled = false;
}
