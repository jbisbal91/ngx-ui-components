import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpansionPanel } from '../expansion-panel.interface';
import { NgClass, NgIf, NgStyle } from '@angular/common';

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
  styleUrls: ['./expansion-panel.component.scss'],
  standalone: true,
  host: {
    class: 'ngx-expansion-panel',
  },
  imports: [NgClass,NgIf],
})
export class ExpansionPanelComponent implements ExpansionPanel, OnInit {
  @Output() onClick: EventEmitter<ExpansionPanelComponent> =
    new EventEmitter<ExpansionPanelComponent>();

  public id: string = '';
  @Input() disabled: boolean = false;
  public expanded: boolean = false;
  @Input() label: string = '';
  @Input() ngxType: 'card' | 'normal' = 'normal';

  constructor() {}

  ngOnInit(): void {
    this.id = this.guid();
  }

  expand() {
    const expansionPanel = new ExpansionPanelComponent();
    expansionPanel.expanded = this.expanded;
    expansionPanel.label = this.label;
    expansionPanel.disabled = this.disabled;
    expansionPanel.id = this.id;
    this.onClick.emit(expansionPanel);
  }

  guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
