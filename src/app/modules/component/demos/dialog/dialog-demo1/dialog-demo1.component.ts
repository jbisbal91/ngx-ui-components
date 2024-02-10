import { Component } from '@angular/core';
import { NgxDialog } from 'projects/ngx-eagle/dialog';
import { DialogRef1Component } from '../dialog-ref1/dialog-ref1.component';
//import { NgxDialog } from 'ngx-eagle/dialog';

@Component({
  selector: 'app-dialog-demo1',
  templateUrl: './dialog-demo1.component.html',
  styleUrls: ['./dialog-demo1.component.scss'],
})
export class DialogDemo1Component {
  constructor(public ngxDialog: NgxDialog) {}
  openDialog() {
    this.ngxDialog.open(
      DialogRef1Component,
      {data:''},
      {width:'30rem'}
    );
  }
}
