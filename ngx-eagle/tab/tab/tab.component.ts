import { Component, Input, booleanAttribute } from '@angular/core';
import { Tab } from './tab.interface';
import { NgIf } from '@angular/common';
import { Guid } from 'ngx-eagle/core/services';

@Component({
  selector: 'ngx-tab',
  template: `
    <div [id]="id" *ngIf="isActive">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [NgIf],
})
export class TabComponent implements Tab {
  public id: string = Guid.create();
  public isActive: boolean = false;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input() label: string = '';
}
