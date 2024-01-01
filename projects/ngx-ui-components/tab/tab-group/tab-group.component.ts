import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
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
  styleUrls: ['./tab-group.component.scss'],
  host: {
    '[class.ngx-tab-position-top]': `ngxTabPosition === 'top'`,
    '[class.ngx-tab-position-left]': `ngxTabPosition === 'left'`,
    '[class.ngx-tab-position-right]': `ngxTabPosition === 'right'`,
  },
})
export class TabGroupComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(TabComponent) public tabs!: QueryList<TabComponent>;
  animationToLeft: boolean = false;
  animationToRigth: boolean = false;

  @Input() ngxTabPosition: NgxTabPosition = 'top';
  @Input() ngxMode: NgxMode = 'default';
  @Input() ngxAlignTabs: NgxAlignTabs = 'start';

  readonly currentNgxMode$ = new ReplaySubject<NgxMode>(0);
  private subscription: Subscription = new Subscription();

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.selectTab(this.tabs.first);
    });
  }

  ngAfterContentInit(): void {
    this.currentNgxMode$.next(this.ngxMode);
    this.cdr.markForCheck();
    this.cdr.markForCheck();
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
