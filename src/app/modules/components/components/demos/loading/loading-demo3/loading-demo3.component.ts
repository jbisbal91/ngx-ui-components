import { Component } from '@angular/core';
import { SpinnerType } from 'ngx-eagle/loading';

@Component({
  selector: 'app-loading-demo3',
  templateUrl: './loading-demo3.component.html',
  styleUrls: ['./loading-demo3.component.scss']
})
export class LoadingDemo3Component {
  spinnerType:SpinnerType = 'dots';
}
