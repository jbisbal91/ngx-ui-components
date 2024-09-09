import { Component } from '@angular/core';

@Component({
  selector: 'app-resize-demo1',
  templateUrl: './resize-demo1.component.html',
  styleUrls: ['./resize-demo1.component.scss']
})
export class ResizeDemo1Component {
  resizableWidthChange(width: number): void {
    console.log('Width: ', width);
  }
}
