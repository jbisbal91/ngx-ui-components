import { Component, inject } from '@angular/core';
import { DialogRef } from 'ngx-eagle/dialog';

@Component({
  selector: 'app-dialog-ref2',
  template: `
    <div class="header">
      <h3>{{ ref.data.title }}</h3>
    </div>
    <ngx-divider></ngx-divider>
    <div class="content">
      <ngx-outlined-select-field
        multiple
        label="Select state"
        placeholder="Select state"
      >
        <ngx-option *ngFor="let state of ref.data.states" [value]="state.value">
          {{ state.label }}
        </ngx-option>
      </ngx-outlined-select-field>
    </div>
  `,
  styles: [
    `
      .header,
      .content {
        padding: 1rem;
        display: flex;
        align-items: center;
      }

      ngx-option {
        background-color: var(--ngx-doc-background);
      }
    `,
  ],
})
export class DialogRef2Component {
  ref: DialogRef<any> = inject(DialogRef);
}
