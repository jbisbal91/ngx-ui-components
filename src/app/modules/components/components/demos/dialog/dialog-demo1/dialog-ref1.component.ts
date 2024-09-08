import { Component, inject } from '@angular/core';
import { ButtonModule } from 'ngx-eagle/button';
import { DialogCloseDirective, DialogRef } from 'ngx-eagle/dialog';
import { DividerModule } from 'ngx-eagle/divider';

@Component({
  selector: 'app-dialog-ref1',
  template: `<div class="header">
      <h3>{{ ref.data.title }}</h3>
    </div>
    <ngx-divider></ngx-divider>
    <div class="content">
      <p>Content one</p>
      <p>Content two</p>
      <p>Content three</p>
    </div>
    <div class="footer">
      <button ngx-button buttonRounded="full" buttonFillMode="outlined" dialogClose>
        Cancel
      </button>
      <button ngx-button buttonRounded="full" buttonFillMode="filled" dialogClose>
        OK
      </button>
    </div>`,
  styles: [
    `
      .header,
      .content,
      .footer {
        padding: 1rem;
      }

      .header {
        display: flex;
        align-items: center;
      }

      h3 {
        padding-left: 0.25rem;
        color: currentColor;
      }

      .footer {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
      }
    `,
  ],
  standalone: true,
  imports: [DialogCloseDirective, DividerModule, ButtonModule],
})
export class DialogRef1Component {
  ref: DialogRef<any> = inject(DialogRef);
}
