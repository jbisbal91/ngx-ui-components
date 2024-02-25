import {
  Component,
  EventEmitter,
  Input,
  Output,
  booleanAttribute,
} from '@angular/core';
import { ExpansionPanel } from '../expansion-panel.interface';
import { NgClass, NgIf } from '@angular/common';
import { Guid } from 'ngx-eagle/core/services';
import { NgxExpandIconPosition, NgxType } from '../typings';

@Component({
  selector: 'ngx-expansion-panel',
  template: `
    <div
      class="exp-panel"
      [class.card-type]="ngxType && ngxType === 'card'"
      [class.bordered-type]="ngxType && ngxType === 'bordered'"
      [class.border-bottom-exp-item]="ngxType === 'bordered' && lastExP"
    >
      <div
        (click)="expand()"
        class="header"
        [class.border-bottom-header]="expanded"
        [class.expand-icon-position]="ngxExpandIconPosition === 'left'"
        [class.disabled]="disabled"
      >
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
      <div class="content" *ngIf="expanded">
        <ng-content></ng-content>
      </div>
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
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) expanded: boolean = false;
  @Input() label: string = '';
  ngxType!: NgxType;
  ngxExpandIconPosition!: NgxExpandIconPosition;

  lastExP: boolean = false;

  expand() {
    if (this.disabled) {
      return;
    }
    const expansionPanel = new ExpansionPanelComponent();
    expansionPanel.expanded = this.expanded;
    expansionPanel.label = this.label;
    expansionPanel.disabled = this.disabled;
    expansionPanel.id = this.id;
    this.onClick.emit(expansionPanel);
  }
}
