import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentSidenavComponent } from './pages/component-sidenav/component-sidenav.component';
import { GuidesComponent } from '../guides/pages/guides/guides.component';
import { BadgeDocsComponent } from './docs/badge-docs/badge-docs.component';
import { ButtonDocsComponent } from './docs/button-docs/button-docs.component';
import { CardDocsComponent } from './docs/card-docs/card-docs.component';
import { CarouselDocsComponent } from './docs/carousel-docs/carousel-docs.component';
import { DialogDocsComponent } from './docs/dialog-docs/dialog-docs.component';
import { DividerDocsComponent } from './docs/divider-docs/divider-docs.component';
import { AccordionDocsComponent } from './docs/accordion-docs/accordion-docs.component';
import { SwitchDocsComponent } from './docs/switch-docs/switch-docs.component';
import { TabDocsComponent } from './docs/tab-docs/tab-docs.component';
import { TagDocsComponent } from './docs/tag-docs/tag-docs.component';
import { GridDocsComponent } from './docs/grid-docs/grid-docs.component';
import { TimelineDocsComponent } from './docs/timeline-docs/timeline-docs.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentSidenavComponent,
    children: [
      { path: 'guides', component: GuidesComponent },
      { path: 'badge', component: BadgeDocsComponent },
      { path: 'buttons', component: ButtonDocsComponent },
      { path: 'card', component: CardDocsComponent },
      { path: 'carousel', component: CarouselDocsComponent },
      { path: 'dialog', component: DialogDocsComponent },
      { path: 'divider', component: DividerDocsComponent },
      { path: 'expansion', component: AccordionDocsComponent },
      { path: 'grid', component: GridDocsComponent },
      { path: 'switch', component: SwitchDocsComponent },
      { path: 'tabs', component: TabDocsComponent },
      { path: 'tags', component: TagDocsComponent },
      { path: 'timeline', component: TimelineDocsComponent },
      { path: '**', redirectTo: 'guides', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
