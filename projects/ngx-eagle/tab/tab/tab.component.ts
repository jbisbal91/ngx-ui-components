import { Component, Input, OnInit } from '@angular/core';
import { Tab } from './tab.interface';

@Component({
  selector: 'ngx-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent implements Tab, OnInit {
  public id: string = '';
  public isActive: boolean = false;
  @Input() label: string = '';
  @Input() disabled: boolean = false;

  ngOnInit(): void {
    this.id = this.guid();
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