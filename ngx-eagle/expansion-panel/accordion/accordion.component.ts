import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  QueryList,
} from '@angular/core';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-accordion',
  template: `<ng-content></ng-content>`,
  standalone:true
})
export class AccordionComponent implements AfterViewInit, OnDestroy {

  @ContentChildren(ExpansionPanelComponent)
  public expansionPanels!: QueryList<ExpansionPanelComponent>;

  private subscription: Subscription = new Subscription();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.expansionPanels.last.lastExP = true;
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
