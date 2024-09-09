import { Component } from '@angular/core';
import { MarkerPosition, ResizeDirection } from 'ngx-eagle/resizable';

@Component({
  selector: 'app-resize-demo2',
  templateUrl: './resize-demo2.component.html',
  styleUrls: ['./resize-demo2.component.scss']
})
export class ResizeDemo2Component {

  resizableWidth: number = 300;
  minWidth: number = 100;
  minHeight: number = 100;
  markerPosition: MarkerPosition = 'bottom-right';
  resizeDirection: ResizeDirection = 'diagonal';

  resizeDirectionOptions: ResizeDirection[] = ['diagonal', 'horizontal', 'vertical'];
  markerPositionOptions: MarkerPosition[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'left', 'right', 'top', 'bottom'];

  onResize(event: { width: number, height: number }) {
    console.log('New dimensions:', event);
  }
}
