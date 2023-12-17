import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Subscription } from 'rxjs';
import { Tab } from '../tab/tab.interface';

@Component({
  selector: 'ngx-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent {
  @ContentChildren(TabComponent) public tabs!: QueryList<TabComponent>;
  animationToLeft: boolean = false;
  animationToRigth: boolean = false;
  animationToCenter: boolean = false;

  private subscription: Subscription = new Subscription();

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.selectTab(this.tabs.first);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectTab(tab: Tab) {
    if (tab.disabled) {
      return;
    }
    if (tab === this.tabs.first) {
      return this.animationmoveToRight(tab);
    }
    if (tab === this.tabs.last) {
      return this.animationmoveToLeft(tab);
    }
    return this.animationmoveToLeft(tab);
  }

  animationmoveToLeft(tab: Tab) {
    this.animationToLeft = true;
    this.tabs.forEach((tab) => (tab.isActive = false));
    tab.isActive = true;
    setTimeout(() => {
      this.animationToLeft = false;
    }, 300);
  }

  animationmoveToRight(tab: Tab) {
    this.animationToRigth = true;
    this.tabs.forEach((tab) => (tab.isActive = false));
    tab.isActive = true;
    setTimeout(() => {
      this.animationToRigth = false;
    }, 300);
  }
}
