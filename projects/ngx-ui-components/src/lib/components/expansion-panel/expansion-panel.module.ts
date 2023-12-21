import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerModule } from '../divider/divider.module';

import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [AccordionComponent, ExpansionPanelComponent],
  exports: [AccordionComponent, ExpansionPanelComponent],
  imports: [CommonModule, DividerModule],
})
export class ExpansionPanelModule {}
