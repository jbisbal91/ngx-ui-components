import { Component } from '@angular/core';

@Component({
  selector: 'app-rate-demo3',
  templateUrl: './rate-demo3.component.html',
  styleUrls: ['./rate-demo3.component.scss'],
})
export class RateDemo3Component {
  value: number = 0;

  ngModelChange(event:any) {
    console.log(event)
  }
}
