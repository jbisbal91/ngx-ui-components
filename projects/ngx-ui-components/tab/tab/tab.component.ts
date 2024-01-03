import {
  AfterContentInit,
  ChangeDetectorRef,
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
  templateUrl: './tab.component.html'
})
export class TabComponent implements Tab, OnInit, AfterContentInit, OnDestroy {
  @Input() label: string = '';
  public isActive: boolean = false;
  @Input() disabled: boolean = false;
  public id: string = '';
  ngxMode = 'default';

  private subscription: Subscription = new Subscription();

  constructor(
    @Optional() @Host() public tabGroupComponent: TabGroupComponent,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.id = this.guid();
  }

  ngAfterContentInit(): void {
    this.subscription.add(
      this.tabGroupComponent?.currentNgxMode$.subscribe((currentNgxMode) => {
        this.ngxMode = currentNgxMode;
      })
    );
    this.cdr.markForCheck();
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
