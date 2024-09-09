import { Component } from '@angular/core';
import { MarkerPosition, ResizeDirection } from 'ngx-eagle/resizable';

@Component({
  selector: 'app-resize-demo1',
  templateUrl: './resize-demo1.component.html',
  styleUrls: ['./resize-demo1.component.scss']
})
export class ResizeDemo1Component {

  resizableWidth: number = 300;
  minWidth: number = 100;
  minHeight: number = 100;

  onResize(event: { width: number, height: number }) {
    console.log('New dimensions:', event);
  }
}
