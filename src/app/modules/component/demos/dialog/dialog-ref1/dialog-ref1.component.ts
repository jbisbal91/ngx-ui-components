import { Component } from '@angular/core';
import { NgxDialog } from 'ngx-eagle/dialog';


@Component({
  selector: 'app-dialog-ref1',
  templateUrl: './dialog-ref1.component.html',
  styleUrls: ['./dialog-ref1.component.scss'],
})
export class DialogRef1Component {
  value: any = [];
  options: { value: string; label: string }[] = [];

  onChangeValue(value: any) {
    this.value = value;
  }

  constructor(private dialog: NgxDialog) {
    for (let i = 1; i <= 10; i++) {
      this.options.push({ value: `opt${i}`, label: `Option ${i}` });
      this.value.push({ value: `opt${i}`, label: `Option ${i}` });
    }
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}
