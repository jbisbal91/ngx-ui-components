import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentSidenavComponent } from './pages/component-sidenav/component-sidenav.component';

import { ComponentCategoryListComponent } from './components/component-category-list/component-category-list.component';
import { DialogDocsComponent } from './docs/dialog-docs/dialog-docs.component';
import { TabDocsComponent } from './docs/tab-docs/tab-docs.component';
import { ButtonDocsComponent } from './docs/button-docs/button-docs.component';
import { AccordionDocsComponent } from './docs/accordion-docs/accordion-docs.component';
import { DividerDocsComponent } from './docs/divider-docs/divider-docs.component';
import { GuidesComponent } from '../guides/pages/guides/guides.component';
import { CardDocsComponent } from './docs/card-docs/card-docs.component';
import { CarouselDocsComponent } from './docs/carousel-docs/carousel-docs.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentSidenavComponent,
    children: [
      { path: 'guides', component: GuidesComponent },
      { path: 'card', component: CardDocsComponent },
      { path: 'carousel', component: CarouselDocsComponent },
      { path: 'buttons', component: ButtonDocsComponent },
      { path: 'tabs', component: TabDocsComponent },
      { path: 'dialog', component: DialogDocsComponent },
      { path: 'divider', component: DividerDocsComponent },
      { path: 'category', component: ComponentCategoryListComponent },
      { path: 'expansion', component: AccordionDocsComponent },
      { path: '**', redirectTo: 'guides', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
