import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Tab } from '../tab/tab.interface';
import { NgForOf, NgIf } from '@angular/common';

export type NgxTabPosition = 'top' | 'left' | 'right';
export type NgxAlignTabs = 'start' | 'end' | 'center';
export type NgxMode = 'default' | 'closeable';

@Component({
  selector: 'ngx-tab-group',
  template: `
    <ul
      [class.ngx-tab-group-start]="ngxAlignTabs === 'start'"
      [class.ngx-tab-group-end]="ngxAlignTabs === 'end'"
      [class.ngx-tab-group-center]="ngxAlignTabs === 'center'"
      [class.ngx-tab-position-top]="ngxTabPosition === 'top'"
      [class.ngx-tab-position-left]="ngxTabPosition === 'left'"
      [class.ngx-tab-position-right]="ngxTabPosition === 'right'"
      *ngIf="tabs.length > 0"
    >
      <li
        [class.ngx-tab-position-top]="ngxTabPosition === 'top'"
        [class.ngx-tab-position-left]="ngxTabPosition === 'left'"
        [class.ngx-tab-position-right]="ngxTabPosition === 'right'"
        *ngFor="let tab of tabs; let ind = index"
        [class.active]="tab.isActive"
        [class.disabled]="tab.disabled"
        (click)="selectTab(ind)"
      >
        <span
          [class.ml-4]="ngxTabPosition === 'left'"
          [class.mr-2]="ngxTabPosition === 'left'"
          [class.ml-2]="ngxTabPosition === 'right'"
          >{{ tab.label }}</span
        >

        <svg
          class="ngx-tab-close"
          [class.ngx-tab-position-left]="ngxTabPosition === 'left'"
          [class.ngx-tab-position-right]="ngxTabPosition === 'right'"
          *ngIf="ngxMode === 'closeable'"
          (click)="closeTab(tab)"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 -960 960 960"
          width="1em"
        >
          <path
            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
          />
        </svg>
      </li>
    </ul>

    <div
      class="mt-2"
      [class.ml-4]="ngxTabPosition === 'left'"
      [class.mr-4]="ngxTabPosition === 'right'"
    >
      <ng-content></ng-content>
    </div>
  `,
  host: {
    class: 'ngx-tab-group',
    '[class.ngx-tab-position-top]': `ngxTabPosition === 'top'`,
    '[class.ngx-tab-position-left]': `ngxTabPosition === 'left'`,
    '[class.ngx-tab-position-right]': `ngxTabPosition === 'right'`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgForOf, NgIf],
})
export class TabGroupComponent implements AfterContentInit {
  @ContentChildren(TabComponent) public tabs!: QueryList<TabComponent>;
  @Input() ngxTabPosition: NgxTabPosition = 'top';
  @Input() ngxMode: NgxMode = 'default';
  @Input() ngxAlignTabs: NgxAlignTabs = 'start';

  internalSelectedIndex: number = 0;

  @Input()
  get ngxSelectedIndex(): number {
    return this.internalSelectedIndex;
  }

  set ngxSelectedIndex(index: number) {
    if (this.internalSelectedIndex !== index) {
      this.internalSelectedIndex = index;
      this.ngxSelectedIndexChange.emit(index);
    }
  }

  @Output() ngxSelectedIndexChange: EventEmitter<number> =
    new EventEmitter<number>();

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  ngAfterContentInit(): void {
    this.selectTab(this.internalSelectedIndex);
  }

  findTabByIndex(index: number) {
    const tabs = this.tabs.toArray();
    return tabs[index];
  }

  selectTab(index: number) {
    let tab: Tab = this.findTabByIndex(index);
    if (tab?.disabled) {
      return;
    }
    this.tabs?.forEach((tab) => (tab.isActive = false));
    if (tab) {
      tab.isActive = true;
    }
    this.ngxSelectedIndexChange.emit(index);
    this.cdr.markForCheck();
  }

  closeTab(tab: Tab): void {
    if (tab?.disabled) {
      return;
    }
    const tabs = this.tabs.toArray();
    let index = tabs.findIndex((tb) => tb.id === tab.id);
    tabs.splice(index, 1);
    this.tabs = new QueryList<TabComponent>();
    this.tabs.reset(tabs);
    const tabContent = document.getElementById(tab.id);
    this.renderer.removeChild(tabContent?.parentNode, tabContent);
    if (tab.isActive) {
      this.selectTab(0);
    }
  }
}
