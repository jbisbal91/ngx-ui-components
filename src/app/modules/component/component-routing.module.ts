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
import { InputDocsComponent } from './docs/input-docs/input-docs.component';
import { SelectDocsComponent } from './docs/select-docs/select-docs.component';
import { TableDocsComponent } from './docs/table-docs/table-docs.component';
import { AvatarDocsComponent } from './docs/avatar/avatar-docs.component';
import { DrawerDocsComponent } from './docs/drawer-docs/drawer-docs.component';
import { ProgressDocsComponent } from './docs/progress-docs/progress-docs.component';
import { RateDocsComponent } from './docs/rate-docs/rate-docs.component';
import { CheckboxDocsComponent } from './docs/checkbox-docs/checkbox-docs.component';
import { RadioDocsComponent } from './docs/radio-docs/radio-docs.component';
import { PaginatorDocsComponent } from './docs/paginator-docs/paginator-docs.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentSidenavComponent,
    children: [
      { path: 'guides', component: GuidesComponent },
      { path: 'avatar', component: AvatarDocsComponent },
      { path: 'badge', component: BadgeDocsComponent },
      { path: 'buttons', component: ButtonDocsComponent },
      { path: 'card', component: CardDocsComponent },
      { path: 'carousel', component: CarouselDocsComponent },
      { path: 'checkbox', component: CheckboxDocsComponent },     
      { path: 'dialog', component: DialogDocsComponent },
      { path: 'divider', component: DividerDocsComponent },
      { path: 'drawer', component: DrawerDocsComponent },
      { path: 'expansion', component: AccordionDocsComponent },
      { path: 'grid', component: GridDocsComponent },
      { path: 'input', component: InputDocsComponent },
      { path: 'paginator', component: PaginatorDocsComponent },
      { path: 'progress', component: ProgressDocsComponent },
      { path: 'radio-button', component: RadioDocsComponent },
      { path: 'rate', component: RateDocsComponent },
      { path: 'select', component: SelectDocsComponent },
      { path: 'switch', component: SwitchDocsComponent },
      { path: 'table', component: TableDocsComponent },
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
