import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  Renderer2,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { ReplaySubject, Subscription } from 'rxjs';
import { Tab } from '../tab/tab.interface';

export type NgxTabPosition = 'top' | 'left' | 'right';
export type NgxAlignTabs = 'start' | 'end' | 'center';
export type NgxMode = 'default' | 'closeable';

@Component({
  selector: 'ngx-tab-group',
  templateUrl: './tab-group.component.html',
  host: {
    class: 'ngx-tab-group',
    '[class.ngx-tab-position-top]': `ngxTabPosition === 'top'`,
    '[class.ngx-tab-position-left]': `ngxTabPosition === 'left'`,
    '[class.ngx-tab-position-right]': `ngxTabPosition === 'right'`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabGroupComponent implements OnInit {
  @ContentChildren(TabComponent) public tabs!: QueryList<TabComponent>;

  @Input() ngxTabPosition: NgxTabPosition = 'top';
  @Input() ngxMode: NgxMode = 'default';
  @Input() ngxAlignTabs: NgxAlignTabs = 'start';

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.selectTab(this.tabs?.first);
      this.cdr.detectChanges();
    });
  }

  selectTab(tab: Tab) {
    if (tab?.disabled) {
      return;
    }
    this.tabs?.forEach((tab) => (tab.isActive = false));
    if (tab) {
      tab.isActive = true;
    }
    this.cdr.markForCheck();
  }

  closeTab(tab: any): void {
    const tabs = this.tabs.toArray();
    let index = tabs.findIndex((tb) => tb.id === tab.id);
    tabs.splice(index, 1);
    this.tabs = new QueryList<TabComponent>();
    this.tabs.reset(tabs);
    const tabContent = document.getElementById(tab.id);
    this.renderer.removeChild(tabContent?.parentNode, tabContent);
    if (tab.isActive) {
      this.selectTab(this.tabs.first);
    }
  }
}
