import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExpansionPanel } from '../expansion-panel.interface';
import { NgClass, NgIf } from '@angular/common';
import { Guid } from 'ngx-eagle/core/services';

@Component({
  selector: 'ngx-expansion-panel',
  template: `
    <div
      class="card-epanel mb-4 p-4"
      [class.card-bg]="ngxType === 'card'"
      [ngClass]="{ 'rounded-lg box-shadow': ngxType === 'card' }"
    >
      <div (click)="expand()" class="card-header">
        <span>{{ label }}</span>
        <span class="arrow flex" [ngClass]="expanded ? 'rotate' : 'no-rotate'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </div>
      <ng-content *ngIf="expanded"></ng-content>
      <div class="divider mt-4" *ngIf="ngxType === 'normal'"></div>
    </div>
  `,
  standalone: true,
  host: {
    class: 'ngx-expansion-panel',
  },
  imports: [NgClass, NgIf],
})
export class ExpansionPanelComponent implements ExpansionPanel {
  @Output() onClick: EventEmitter<ExpansionPanelComponent> =
    new EventEmitter<ExpansionPanelComponent>();

  public id: string = Guid.create();
  @Input() disabled: boolean = false;
  public expanded: boolean = false;
  @Input() label: string = '';
  @Input() ngxType: 'card' | 'normal' = 'normal';

  expand() {
    const expansionPanel = new ExpansionPanelComponent();
    expansionPanel.expanded = this.expanded;
    expansionPanel.label = this.label;
    expansionPanel.disabled = this.disabled;
    expansionPanel.id = this.id;
    this.onClick.emit(expansionPanel);
  }
}
