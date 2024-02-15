import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-demo1',
  templateUrl: './progress-demo1.component.html',
  styleUrls: ['./progress-demo1.component.scss'],
})
export class ProgressDemo1Component {
  percent = 0;

  increase(): void {
    this.percent = this.percent + 10;
    if (this.percent > 100) {
      this.percent = 100;
    }
  }

  decline(): void {
    this.percent = this.percent - 10;
    if (this.percent < 0) {
      this.percent = 0;
    }
  }
}
