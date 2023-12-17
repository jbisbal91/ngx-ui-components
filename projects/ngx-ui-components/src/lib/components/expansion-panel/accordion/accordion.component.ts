import { Component, ContentChildren, OnDestroy, QueryList } from '@angular/core';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnDestroy {

  @ContentChildren(ExpansionPanelComponent) public expansionPanels!: QueryList<ExpansionPanelComponent>;

  private subscription: Subscription = new Subscription();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterContentInit(): void {
    this.expansionPanels.forEach(ep => {
      this.subscription.add(ep.onClick.subscribe((value) => {
        this.expand(value);
      }));
    })
  }

  expand(component: any) {
    this.expansionPanels.forEach(ep => {
      if (ep.id === component.id) {
        ep.expanded = ep.expanded ? false : true;
      } else {
        ep.expanded = false;
      }
    });
  }
}
