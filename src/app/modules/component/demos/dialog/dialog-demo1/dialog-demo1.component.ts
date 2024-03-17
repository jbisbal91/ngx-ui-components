import { Component } from '@angular/core';
import { DialogRef1Component } from '../dialog-ref1/dialog-ref1.component';
import { NgxDialog } from 'ngx-eagle/dialog';

@Component({
  selector: 'app-dialog-demo1',
  templateUrl: './dialog-demo1.component.html',
  styleUrls: ['./dialog-demo1.component.scss'],
})
export class DialogDemo1Component {
  constructor(private dialog: NgxDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogRef1Component, {
      draggable: true,
      closeButton: true,
    });

    dialogRef.afterClosed$.subscribe(() => {
      console.log('The modal has been closed');
    });

    dialogRef.backdropClick$.subscribe(() => {
      console.log('Backdrop has been clicked');
    });
  }
}
