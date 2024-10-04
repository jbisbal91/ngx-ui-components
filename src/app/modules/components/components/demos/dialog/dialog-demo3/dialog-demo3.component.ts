import { Component, TemplateRef, inject } from '@angular/core';
import { NgxDialog } from 'ngx-eagle/dialog';

@Component({
  selector: 'app-dialog-demo3',
  template: `
    <ng-template #modalTemplate let-ref>
      <div class="header">
        <h3>Modal Title</h3>
      </div>
      <ngx-divider></ngx-divider>
      <div class="content">
        <p>Content one</p>
        <p>Content two</p>
        <p>Content three</p>
      </div>
      <div class="footer">
        <button
          ngx-button
          buttonRounded="full"
          buttonFillMode="outlined"
          (click)="ref.close()"
        >
          Close
        </button>
      </div>
    </ng-template>
    <button
      ngx-button
      buttonRounded="full"
      buttonFillMode="filled"
      (click)="openDialog(modalTemplate)"
    >
      Open dialog
    </button>
  `,
  styles: [
    `
      .header,
      .content,
      .footer {
        padding: 1rem;
      }
      .footer {
        display: flex;
        justify-content: flex-end;
      }
      button[ngx-button] {
        width: 120px;
      }
    `,
  ],
})
export class DialogDemo3Component {
  private dialog = inject(NgxDialog);

  openDialog(modalTemplate: TemplateRef<any>) {
    this.dialog.open(modalTemplate);
  }
}
