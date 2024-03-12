import { Component } from '@angular/core';

@Component({
  selector: 'app-select-demo2',
  templateUrl: './select-demo2.component.html',
  styleUrls: ['./select-demo2.component.scss']
})
export class SelectDemo2Component {
  value = 'opt1';
  options: { value: string; label: string }[] = [];
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.options.push({ value: `opt${i}`, label: `Option ${i}` });
    }
  }

  onChangeValue(value: any) {
    this.value = value;
    console.log(value)
  }
}
