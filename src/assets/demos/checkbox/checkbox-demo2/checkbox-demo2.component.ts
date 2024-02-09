import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-demo2',
  templateUrl: './checkbox-demo2.component.html',
  styleUrls: ['./checkbox-demo2.component.scss'],
})
export class CheckboxDemo2Component {
  allComplete: boolean = false;
  indeterminate: boolean = false;
  checkboxList = [
    { name: 'Checkbox 1', completed: false },
    { name: 'Checkbox 2', completed: false },
    { name: 'Checkbox 3', completed: false },
  ];

  setAll(completed: boolean) {
    this.allComplete = completed;
    this.indeterminate = !completed && this.indeterminate ? true : false;
    this.checkboxList.forEach((chBx) => (chBx.completed = completed));
  }

  updateAllComplete(checkbox: any, checked: boolean) {
    const index = this.checkboxList.findIndex((chBx) => chBx === checkbox);
    if (index !== -1) {
      this.checkboxList[index].completed = checked;
    }
    const checkCompleted = this.checkboxList.filter(
      (chBx) => chBx.completed
    ).length;
    this.allComplete = checkCompleted === this.checkboxList.length;
    this.indeterminate = checkCompleted > 0 && !this.allComplete;
  }
}
