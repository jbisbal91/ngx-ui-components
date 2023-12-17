import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Subscription } from 'rxjs';
import { Tab } from '../tab/tab.interface';

@Component({
  selector: 'ngx-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent {

  @ContentChildren(TabComponent) public tabs!: QueryList<TabComponent>;

  private subscription: Subscription = new Subscription();

  ngAfterContentInit(): void {
    this.selectTab(this.tabs.first)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectTab(tab: Tab) {
    if (tab.disabled) { return; }
    this.tabs.forEach(tab => tab.isActive = false)
    tab.isActive = true;
  }
}
