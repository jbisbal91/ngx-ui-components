import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-demo4',
  templateUrl: './progress-demo4.component.html',
  styleUrls: ['./progress-demo4.component.scss'],
})
export class ProgressDemo4Component {
  percent = 0;

  increase(): void {
    this.percent = this.percent + 10;
    if (this.percent > 100) {
      this.percent = 100;
    }
  }

  decrease(): void {
    this.percent = this.percent - 10;
    if (this.percent < 0) {
      this.percent = 0;
    }
  }
}
