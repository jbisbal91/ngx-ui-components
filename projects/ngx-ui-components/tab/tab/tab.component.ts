import {
  AfterContentInit,
  Component,
  Host,
  Input,
  OnDestroy,
  OnInit,
  Optional,
} from '@angular/core';
import { Tab } from './tab.interface';

import { TabGroupComponent } from '../tab-group/tab-group.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements Tab, OnInit, OnDestroy {
  @Input() label: string = '';
  public isActive: boolean = false;
  @Input() disabled: boolean = false;
  public id: string = '';
  ngxMode: any = 'default';

  private subscription: Subscription = new Subscription();

  @Optional() @Host() public tabGroupComponent!: TabGroupComponent;
  constructor() {}

  ngOnInit(): void {
    this.id = this.guid();
    this.subscription.add(
      this.tabGroupComponent?.currentNgxMode$.subscribe((currentNgxMode) => {
        this.ngxMode = currentNgxMode;
      })
    );
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
