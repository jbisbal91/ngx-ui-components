import { Component, inject } from '@angular/core';
import { DialogRef } from 'ngx-eagle/dialog';

@Component({
  selector: 'app-dialog-ref2',
  templateUrl: './dialog-ref2.component.html',
  styleUrls: ['./dialog-ref2.component.scss'],
})
export class DialogRef2Component {
  ref: DialogRef<any> = inject(DialogRef);
}
