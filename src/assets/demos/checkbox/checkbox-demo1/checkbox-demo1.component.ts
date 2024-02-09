import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-demo1',
  templateUrl: './checkbox-demo1.component.html',
  styleUrls: ['./checkbox-demo1.component.scss'],
})
export class CheckboxDemo1Component {
  allComplete: boolean = false;
  indeterminate: boolean = false;
  checkboxList = [
    { name: 'Checkbox 1', completed: false },
    { name: 'Checkbox 2', completed: false },
    { name: 'Checkbox 3', completed: false },
  ];

  setAll(completed: boolean) {
    if (this.indeterminate && !completed) {
      return;
    }
    this.allComplete = completed;
    this.checkboxList.forEach((chBx) => (chBx.completed = completed));
  }

  updateAllComplete() {
    const checkCompleted = this.checkboxList.filter(
      (chBx) => chBx.completed
    ).length;
    this.allComplete = checkCompleted === this.checkboxList.length;
    this.indeterminate = checkCompleted > 0 && !this.allComplete;
  }
}
