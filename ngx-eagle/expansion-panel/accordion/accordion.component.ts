import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  OnDestroy,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';
import { Subscription } from 'rxjs';
import { NgxExpandIconPosition, NgxType } from '../typings';

@Component({
  selector: 'ngx-accordion',
  template: `<ng-content></ng-content>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent
  implements AfterViewInit, AfterContentInit, OnChanges, OnDestroy
{
  @Input() ngxType: NgxType = 'line';
  @Input() ngxExpandIconPosition:NgxExpandIconPosition = 'right'

  @ContentChildren(ExpansionPanelComponent)
  public expansionPanels!: QueryList<ExpansionPanelComponent>;

  private subscription: Subscription = new Subscription();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(): void {
    setTimeout(() => {
      this.setType();
    });
    this.cdr.markForCheck();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.expansionPanels.last.lastExP = true;
    setTimeout(() => {
      this.setType();
    });
  }

  setType() {
    if (this.expansionPanels) {
      this.expansionPanels.forEach((exPanel) => {
        exPanel.ngxType = this.ngxType;
        exPanel.ngxExpandIconPosition = this.ngxExpandIconPosition;
      });
    }
  }

  ngAfterContentInit(): void {
    this.expansionPanels.forEach((ep) => {
      this.subscription.add(
        ep.onClick.subscribe((value) => {
          this.expand(value);
        })
      );
    });
  }

  expand(component: any) {
    this.expansionPanels.forEach((ep) => {
      if (ep.id === component.id) {
        ep.expanded = ep.expanded ? false : true;
      } else {
        ep.expanded = false;
      }
    });
  }
}
