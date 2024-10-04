import { Component, inject } from '@angular/core';
import { ButtonModule } from 'ngx-eagle/button';
import { DialogCloseDirective, DialogRef } from 'ngx-eagle/dialog';
import { DividerModule } from 'ngx-eagle/divider';

@Component({
  selector: 'app-dialog-ref1',
  templateUrl: './dialog-ref1.component.html',
  styleUrls: ['./dialog-ref1.component.scss'],
  standalone: true,
  imports: [DialogCloseDirective, DividerModule, ButtonModule],
})
export class DialogRef1Component {
  ref: DialogRef<any> = inject(DialogRef);
}
