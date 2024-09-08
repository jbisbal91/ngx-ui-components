import { Component } from '@angular/core';
import { LabelPosition } from 'ngx-eagle/switch';

@Component({
  selector: 'app-switch-demo4',
  templateUrl: './switch-demo4.component.html',
  styleUrls: ['./switch-demo4.component.scss'],
})
export class SwitchDemo4Component {
  labelPosition: LabelPosition = 'after';
}
