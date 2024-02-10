import { Component } from '@angular/core';
import { NgxDialog } from 'projects/ngx-eagle/dialog';


@Component({
  selector: 'app-dialog-ref1',
  templateUrl: './dialog-ref1.component.html',
  styleUrls: ['./dialog-ref1.component.scss']
})
export class DialogRef1Component {

  constructor(public ngxDialog: NgxDialog) {}
  closeDialog() {
    this.ngxDialog.closeAll();
  }
}
