import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ngx-divider',
  template: `
    <ng-container>
      <span *ngIf="ngxText">{{ ngxText }}</span>
    </ng-container>
  `,
  standalone: true,
  host: {
    class: 'ngx-divider',
  },
  imports: [NgIf],
})
export class DividerComponent {
  @Input() ngxText: string = '';
}
