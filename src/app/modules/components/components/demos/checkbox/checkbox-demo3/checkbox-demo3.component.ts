import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-demo3',
  templateUrl: './checkbox-demo3.component.html',
  styleUrls: ['./checkbox-demo3.component.scss'],
})
export class CheckboxDemo3Component {
  checkboxList = [
    { name: 'Checkbox 1', color: '#1890FF' },
    { name: 'Checkbox 2', color: '#006847' },
    { name: 'Checkbox 3', color: '#FFA600' },
  ];
}
