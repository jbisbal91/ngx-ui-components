import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-demo1',
  templateUrl: './checkbox-demo1.component.html',
  styleUrls: ['./checkbox-demo1.component.scss'],
})
export class CheckboxDemo1Component {
  checkboxList = [
    { name: 'Checkbox 1', completed: false },
    { name: 'Checkbox 2', completed: false, color: '#006847' },
    { name: 'Checkbox 3', completed: false, color: '#FFA600' },
  ];

  allComplete: boolean = false;
  indeterminate: boolean = false;

  setAll(completed: boolean) {
    if (this.indeterminate && !completed) {
      return;
    }
    this.allComplete = completed;

    this.checkboxList.forEach((t) => (t.completed = completed));
  }

  updateAllComplete() {
    const checkCompleted = this.checkboxList.filter(
      (chBx) => chBx.completed
    ).length;
    this.allComplete = checkCompleted === this.checkboxList.length;
    this.indeterminate = checkCompleted > 0 && !this.allComplete;
  }

  setAll2(completed: boolean) {
    this.allComplete = completed;
    this.indeterminate = !completed && this.indeterminate ? true : false;
    this.checkboxList.forEach((t) => (t.completed = completed));
  }

  updateAllComplete2(checkbox: any, checked: boolean) {
    const index = this.checkboxList.findIndex((chBx) => chBx === checkbox);
    if (index !== -1) {
      this.checkboxList[index].completed = checked;
    }
    const checkCompleted = this.checkboxList.filter((t) => t.completed).length;
    this.allComplete = checkCompleted === this.checkboxList.length;
    this.indeterminate = checkCompleted > 0 && !this.allComplete;
  }
}
