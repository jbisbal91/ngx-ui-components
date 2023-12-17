import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpansionPanel } from '../expansion-panel.interface';

@Component({
  selector: 'ngx-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent implements ExpansionPanel, OnInit {
  @Output() onClick: EventEmitter<ExpansionPanelComponent> =
    new EventEmitter<ExpansionPanelComponent>();

  public id: string = '';
  @Input() disabled: boolean = false;
  public expanded: boolean = false;
  @Input() label: string = '';
  @Input() ngxType: 'card' | 'normal' = 'normal';

  @Input() color: string = '#000';

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
