import { Component } from '@angular/core';
import { ButtonModule } from 'ngx-eagle/button';
import { DialogCloseDirective } from 'ngx-eagle/dialog';
import { DividerModule } from 'ngx-eagle/divider';

@Component({
  selector: 'app-dialog-ref1',
  template: `<div class="container">
  <div class="header">
    <p class="title">Basic Drawer</p>
  </div>
  <ngx-divider></ngx-divider>
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
</div>`,
  styles: [
    `.container {
    height: 100%;
    width: 100%;
    min-width: 20rem;
    min-height: 15rem;
    padding: 0 1rem;    
    background-color: var(--ngx-doc-background);
}
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
export class DrawerRef4Component {
}
