import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnDestroy,
  QueryList,
  Renderer2,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { ReplaySubject, Subscription } from 'rxjs';
import { Tab } from '../tab/tab.interface';

export type NgxAlignTabs = 'start' | 'end' | 'center';
export type NgxMode = 'default' | 'closeable';

@Component({
  selector: 'ngx-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(TabComponent) public tabs!: QueryList<TabComponent>;
  animationToLeft: boolean = false;
  animationToRigth: boolean = false;
  @Input() ngxMode: NgxMode = 'default';
  @Input() ngxAlignTabs: NgxAlignTabs = 'start';

  readonly currentNgxMode$ = new ReplaySubject<NgxMode>();
  private subscription: Subscription = new Subscription();

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterContentInit(): void {
    this.currentNgxMode$.next(this.ngxMode);
    setTimeout(() => {
      this.selectTab(this.tabs.first);
    });
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
