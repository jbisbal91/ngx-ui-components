import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccordionDocsComponent } from './components/docs/accordion-docs/accordion-docs.component';
import { AvatarDocsComponent } from './components/docs/avatar-docs/avatar-docs.component';
import { BadgeDocsComponent } from './components/docs/badge-docs/badge-docs.component';
import { ButtonDocsComponent } from './components/docs/button-docs/button-docs.component';
import { CardDocsComponent } from './components/docs/card-docs/card-docs.component';
import { CarouselDocsComponent } from './components/docs/carousel-docs/carousel-docs.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CheckboxDocsComponent } from './components/docs/checkbox-docs/checkbox-docs.component';
import { ComponentsComponent } from './components.component';
import { DatepickerDocsComponent } from './components/docs/datepicker-docs/datepicker-docs.component';
import { DialogDocsComponent } from './components/docs/dialog-docs/dialog-docs.component';
import { DividerDocsComponent } from './components/docs/divider-docs/divider-docs.component';
import { DrawerDocsComponent } from './components/docs/drawer-docs/drawer-docs.component';
import { DropdownDocsComponent } from './components/docs/dropdown-docs/dropdown-docs.component';
import { GridDocsComponent } from './components/docs/grid-docs/grid-docs.component';
import { InputDocsComponent } from './components/docs/input-docs/input-docs.component';
import { PaginatorDocsComponent } from './components/docs/paginator-docs/paginator-docs.component';
import { ProgressDocsComponent } from './components/docs/progress-docs/progress-docs.component';
import { RadioButtonDocsComponent } from './components/docs/radio-button-docs/radio-button-docs.component';
import { RateDocsComponent } from './components/docs/rate-docs/rate-docs.component';
import { SelectDocsComponent } from './components/docs/select-docs/select-docs.component';
import { SignatureDocsComponent } from './components/docs/signature-docs/signature-docs.component';
import { SwitchDocsComponent } from './components/docs/switch-docs/switch-docs.component';
import { TabDocsComponent } from './components/docs/tab-docs/tab-docs.component';
import { TableDocsComponent } from './components/docs/table-docs/table-docs.component';
import { TagDocsComponent } from './components/docs/tag-docs/tag-docs.component';
import { TimelineDocsComponent } from './components/docs/timeline-docs/timeline-docs.component';
import { TooltipDocsComponent } from './components/docs/tooltip-docs/tooltip-docs.component';
import { ResizeDocsComponent } from './components/docs/resize-docs/resize-docs.component';
import { ImageCropperDocsComponent } from './components/docs/image-cropper-docs/image-cropper-docs.component';
import { LoadingDocsComponent } from './components/docs/loading-docs/loading-docs.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ComponentsComponent,
        children: [
          { path: 'avatar', component: AvatarDocsComponent },
          { path: 'badge', component: BadgeDocsComponent },
          { path: 'button', component: ButtonDocsComponent },
          { path: 'card', component: CardDocsComponent },
          { path: 'carousel', component: CarouselDocsComponent },
          { path: 'categories', component: CategoriesComponent },
          { path: 'checkbox', component: CheckboxDocsComponent },
          { path: 'datepicker', component: DatepickerDocsComponent },
          { path: 'dialog', component: DialogDocsComponent },
          { path: 'divider', component: DividerDocsComponent },
          { path: 'drawer', component: DrawerDocsComponent },
          { path: 'dropdown', component: DropdownDocsComponent },
          { path: 'expansion', component: AccordionDocsComponent },
          { path: 'grid', component: GridDocsComponent },
          { path: 'image-cropper', component: ImageCropperDocsComponent },
          { path: 'input', component: InputDocsComponent },
          { path: 'loading', component: LoadingDocsComponent },
          { path: 'paginator', component: PaginatorDocsComponent },
          { path: 'progress', component: ProgressDocsComponent },
          { path: 'radio-button', component: RadioButtonDocsComponent },
          { path: 'rate', component: RateDocsComponent },
          { path: 'resize', component: ResizeDocsComponent },          
          { path: 'select', component: SelectDocsComponent },
          { path: 'signature', component: SignatureDocsComponent },
          { path: 'switch', component: SwitchDocsComponent },
          { path: 'tabs', component: TabDocsComponent },
          { path: 'table', component: TableDocsComponent },
          { path: 'tags', component: TagDocsComponent },
          { path: 'timelines', component: TimelineDocsComponent },
          { path: 'tooltip', component: TooltipDocsComponent },
          { path: '**', redirectTo: 'categories', pathMatch: 'full' },
        ],
      },
    ],
  },
  {
    path: 'advanced',
    component: ComponentsComponent,
  },
  { path: '**', redirectTo: 'basic', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
