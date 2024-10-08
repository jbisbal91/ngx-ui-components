import { Component } from '@angular/core';

@Component({
  selector: 'app-select-demo1',
  templateUrl: './select-demo1.component.html',
  styleUrls: ['./select-demo1.component.scss'],
})
export class SelectDemo1Component {
  value: any = 'opt1';
  options: { value: string; label: string }[] = [];

  constructor() {
    for (let i = 1; i <= 10; i++) {
      this.options.push({ value: `opt${i}`, label: `Option ${i}` });
    }
  }

  onChangeValue(value: any) {
    this.value = value;
  }
}
