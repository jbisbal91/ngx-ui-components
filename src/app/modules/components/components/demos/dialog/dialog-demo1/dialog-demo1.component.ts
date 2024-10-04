import { Component } from '@angular/core';
import { DialogRef1Component } from './dialog-ref1.component';
import { NgxDialog } from 'ngx-eagle/dialog';

@Component({
  selector: 'app-dialog-demo1',
  template: `
    <button
      ngx-button
      buttonRounded="full"
      buttonFillMode="filled"
      (click)="openDialog()"
    >
      Open dialog
    </button>
  `,
})
export class DialogDemo1Component {
  constructor(private dialog: NgxDialog) {}

  openDialog() {
    this.dialog.open(DialogRef1Component, {
      data: {
        title: 'The first Modal',
      },
    });
  }
}
