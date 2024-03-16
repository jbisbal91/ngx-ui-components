import { Component } from '@angular/core';
import { DialogRef1Component } from '../dialog-ref1/dialog-ref1.component';
import { DialogService } from 'ngx-eagle/dialog';

@Component({
  selector: 'app-dialog-demo1',
  templateUrl: './dialog-demo1.component.html',
  styleUrls: ['./dialog-demo1.component.scss'],
})
export class DialogDemo1Component {
  constructor(private dialog: DialogService) {}

  openDialog() {
    this.dialog.open(DialogRef1Component,{
      size:'fullScreen',
      backdrop: true,
      enableClose: false,
      closeButton: true,
    });
  }
}
