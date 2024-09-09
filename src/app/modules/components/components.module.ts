import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgxEagleModule } from 'src/app/shared/ngx-eagle/ngx-eagle.module';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { ComponentNavComponent } from './components/component-nav/component-nav.component';
import { ComponentViewerComponent } from './components/component-viewer/component-viewer.component';

import { AccordionDemo1Component } from './components/demos/accordion/accordion-demo1/accordion-demo1.component';
import { AccordionDemo2Component } from './components/demos/accordion/accordion-demo2/accordion-demo2.component';
import { AccordionDocsComponent } from './components/docs/accordion-docs/accordion-docs.component';
import { AvatarDemo1Component } from './components/demos/avatar/avatar-demo1/avatar-demo1.component';
import { AvatarDemo2Component } from './components/demos/avatar/avatar-demo2/avatar-demo2.component';
import { AvatarDemo3Component } from './components/demos/avatar/avatar-demo3/avatar-demo3.component';
import { AvatarDocsComponent } from './components/docs/avatar-docs/avatar-docs.component';
import { BadgeDemo1Component } from './components/demos/badge/badge-demo1/badge-demo1.component';
import { BadgeDocsComponent } from './components/docs/badge-docs/badge-docs.component';
import { ButtonDemo1Component } from './components/demos/button/button-demo1/button-demo1.component';
import { ButtonDocsComponent } from './components/docs/button-docs/button-docs.component';
import { CardDemo1Component } from './components/demos/card/card-demo1/card-demo1.component';
import { CardDocsComponent } from './components/docs/card-docs/card-docs.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselDemo1Component } from './components/demos/carousel/carousel-demo1/carousel-demo1.component';
import { CarouselDemo2Component } from './components/demos/carousel/carousel-demo2/carousel-demo2.component';
import { CarouselDemo3Component } from './components/demos/carousel/carousel-demo3/carousel-demo3.component';
import { CarouselDocsComponent } from './components/docs/carousel-docs/carousel-docs.component';
import { CheckboxDemo1Component } from './components/demos/checkbox/checkbox-demo1/checkbox-demo1.component';
import { CheckboxDemo2Component } from './components/demos/checkbox/checkbox-demo2/checkbox-demo2.component';
import { CheckboxDemo3Component } from './components/demos/checkbox/checkbox-demo3/checkbox-demo3.component';
import { CheckboxDemo4Component } from './components/demos/checkbox/checkbox-demo4/checkbox-demo4.component';
import { CheckboxDemo5Component } from './components/demos/checkbox/checkbox-demo5/checkbox-demo5.component';
import { CheckboxDocsComponent } from './components/docs/checkbox-docs/checkbox-docs.component';
import { DatepickerDocsComponent } from './components/docs/datepicker-docs/datepicker-docs.component';
import { DatepickerDemo1Component } from './components/demos/datepicker/datepicker-demo1/datepicker-demo1.component';
import { DialogDemo1Component } from './components/demos/dialog/dialog-demo1/dialog-demo1.component';
import { DialogDocsComponent } from './components/docs/dialog-docs/dialog-docs.component';
import { DialogRef1Component } from './components/demos/dialog/dialog-demo1/dialog-ref1.component';
import { DialogDemo2Component } from './components/demos/dialog/dialog-demo2/dialog-demo2.component';
import { DialogRef2Component } from './components/demos/dialog/dialog-demo2/dialog-ref2.component';
import { DialogDemo3Component } from './components/demos/dialog/dialog-demo3/dialog-demo3.component';
import { DialogDemo4Component } from './components/demos/dialog/dialog-demo4/dialog-demo4.component';
import { DividerDemo1Component } from './components/demos/divider/divider-demo1/divider-demo1.component';
import { DividerDemo2Component } from './components/demos/divider/divider-demo2/divider-demo2.component';
import { DividerDocsComponent } from './components/docs/divider-docs/divider-docs.component';
import { DrawerDemo1Component } from './components/demos/drawer/drawer-demo1/drawer-demo1.component';
import { DrawerDocsComponent } from './components/docs/drawer-docs/drawer-docs.component';
import { GridDemo1Component } from './components/demos/grid/grid-demo1/grid-demo1.component';
import { GridDemo2Component } from './components/demos/grid/grid-demo2/grid-demo2.component';
import { GridDemo3Component } from './components/demos/grid/grid-demo3/grid-demo3.component';
import { GridDemo4Component } from './components/demos/grid/grid-demo4/grid-demo4.component';
import { GridDocsComponent } from './components/docs/grid-docs/grid-docs.component';
import { InputDemo1Component } from './components/demos/input/input-demo1/input-demo1.component';
import { InputDocsComponent } from './components/docs/input-docs/input-docs.component';
import { ProgressDemo1Component } from './components/demos/progress/progress-demo1/progress-demo1.component';
import { ProgressDocsComponent } from './components/docs/progress-docs/progress-docs.component';
import { RateDemo1Component } from './components/demos/rate/rate-demo1/rate-demo1.component';
import { RateDemo2Component } from './components/demos/rate/rate-demo2/rate-demo2.component';
import { RateDemo3Component } from './components/demos/rate/rate-demo3/rate-demo3.component';
import { RateDemo4Component } from './components/demos/rate/rate-demo4/rate-demo4.component';
import { RateDocsComponent } from './components/docs/rate-docs/rate-docs.component';
import { SelectDemo1Component } from './components/demos/select/select-demo1/select-demo1.component';
import { SelectDocsComponent } from './components/docs/select-docs/select-docs.component';
import { SwitchDemo1Component } from './components/demos/switch/switch-demo1/switch-demo1.component';
import { SwitchDocsComponent } from './components/docs/switch-docs/switch-docs.component';
import { TabDemo1Component } from './components/demos/tabs/tab-demo1/tab-demo1.component';
import { TabDocsComponent } from './components/docs/tab-docs/tab-docs.component';
import { TableDemo1Component } from './components/demos/table/table-demo1/table-demo1.component';
import { TableDocsComponent } from './components/docs/table-docs/table-docs.component';
import { TagDemo1Component } from './components/demos/tag/tag-demo1/tag-demo1.component';
import { TagDocsComponent } from './components/docs/tag-docs/tag-docs.component';
import { TimelineDemo1Component } from './components/demos/timeline/timeline-demo1/timeline-demo1.component';
import { TimelineDocsComponent } from './components/docs/timeline-docs/timeline-docs.component';
import { RadioButtonDemo1Component } from './components/demos/radio-button/radio-button-demo1/radio-button-demo1.component';
import { RadioButtonDocsComponent } from './components/docs/radio-button-docs/radio-button-docs.component';
import { RadioButtonDemo2Component } from './components/demos/radio-button/radio-button-demo2/radio-button-demo2.component';
import { RadioButtonDemo3Component } from './components/demos/radio-button/radio-button-demo3/radio-button-demo3.component';
import { RadioButtonDemo4Component } from './components/demos/radio-button/radio-button-demo4/radio-button-demo4.component';
import { RadioButtonDemo5Component } from './components/demos/radio-button/radio-button-demo5/radio-button-demo5.component';
import { DividerDemo3Component } from './components/demos/divider/divider-demo3/divider-demo3.component';
import { DividerDemo4Component } from './components/demos/divider/divider-demo4/divider-demo4.component';
import { DrawerDemo2Component } from './components/demos/drawer/drawer-demo2/drawer-demo2.component';
import { DrawerDemo3Component } from './components/demos/drawer/drawer-demo3/drawer-demo3.component';
import { TabDemo2Component } from './components/demos/tabs/tab-demo2/tab-demo2.component';
import { TabDemo3Component } from './components/demos/tabs/tab-demo3/tab-demo3.component';
import { TabDemo4Component } from './components/demos/tabs/tab-demo4/tab-demo4.component';
import { TabDemo5Component } from './components/demos/tabs/tab-demo5/tab-demo5.component';
import { TabDemo6Component } from './components/demos/tabs/tab-demo6/tab-demo6.component';
import { TabDemo7Component } from './components/demos/tabs/tab-demo7/tab-demo7.component';
import { SwitchDemo2Component } from './components/demos/switch/switch-demo2/switch-demo2.component';
import { SwitchDemo3Component } from './components/demos/switch/switch-demo3/switch-demo3.component';
import { ProgressDemo2Component } from './components/demos/progress/progress-demo2/progress-demo2.component';
import { ProgressDemo3Component } from './components/demos/progress/progress-demo3/progress-demo3.component';
import { ProgressDemo4Component } from './components/demos/progress/progress-demo4/progress-demo4.component';
import { TimelineDemo2Component } from './components/demos/timeline/timeline-demo2/timeline-demo2.component';
import { TimelineDemo3Component } from './components/demos/timeline/timeline-demo3/timeline-demo3.component';
import { TimelineDemo4Component } from './components/demos/timeline/timeline-demo4/timeline-demo4.component';
import { BadgeDemo2Component } from './components/demos/badge/badge-demo2/badge-demo2.component';
import { BadgeDemo3Component } from './components/demos/badge/badge-demo3/badge-demo3.component';
import { BadgeDemo4Component } from './components/demos/badge/badge-demo4/badge-demo4.component';
import { BadgeDemo5Component } from './components/demos/badge/badge-demo5/badge-demo5.component';
import { BadgeDemo6Component } from './components/demos/badge/badge-demo6/badge-demo6.component';
import { BadgeDemo7Component } from './components/demos/badge/badge-demo7/badge-demo7.component';
import { ButtonDemo2Component } from './components/demos/button/button-demo2/button-demo2.component';
import { ButtonDemo3Component } from './components/demos/button/button-demo3/button-demo3.component';
import { ButtonDemo4Component } from './components/demos/button/button-demo4/button-demo4.component';
import { ButtonDemo5Component } from './components/demos/button/button-demo5/button-demo5.component';
import { TagDemo2Component } from './components/demos/tag/tag-demo2/tag-demo2.component';
import { TagDemo3Component } from './components/demos/tag/tag-demo3/tag-demo3.component';
import { TagDemo4Component } from './components/demos/tag/tag-demo4/tag-demo4.component';
import { CardDemo2Component } from './components/demos/card/card-demo2/card-demo2.component';
import { CardDemo3Component } from './components/demos/card/card-demo3/card-demo3.component';
import { AccordionDemo3Component } from './components/demos/accordion/accordion-demo3/accordion-demo3.component';
import { AccordionDemo4Component } from './components/demos/accordion/accordion-demo4/accordion-demo4.component';
import { AccordionDemo5Component } from './components/demos/accordion/accordion-demo5/accordion-demo5.component';
import { InputDemo3Component } from './components/demos/input/input-demo3/input-demo3.component';
import { InputDemo5Component } from './components/demos/input/input-demo5/input-demo5.component';
import { SelectDemo2Component } from './components/demos/select/select-demo2/select-demo2.component';
import { SelectDemo3Component } from './components/demos/select/select-demo3/select-demo3.component';
import { TableDemo2Component } from './components/demos/table/table-demo2/table-demo2.component';
import { TableDemo3Component } from './components/demos/table/table-demo3/table-demo3.component';
import { TableDemo4Component } from './components/demos/table/table-demo4/table-demo4.component';
import { PaginatorDocsComponent } from './components/docs/paginator-docs/paginator-docs.component';
import { PaginatorDemo1Component } from './components/demos/paginator/paginator-demo1/paginator-demo1.component';
import { PaginatorDemo2Component } from './components/demos/paginator/paginator-demo2/paginator-demo2.component';
import { SwitchDemo4Component } from './components/demos/switch/switch-demo4/switch-demo4.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SignatureDocsComponent } from './components/docs/signature-docs/signature-docs.component';
import { SignatureDemo1Component } from './components/demos/signature/signature-demo1/signature-demo1.component';
import { DropdownDocsComponent } from './components/docs/dropdown-docs/dropdown-docs.component';
import { DropdownDemo1Component } from './components/demos/dropdown/dropdown-demo1/dropdown-demo1.component';
import { DropdownDemo2Component } from './components/demos/dropdown/dropdown-demo2/dropdown-demo2.component';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml'),
  };
}

const standalone = [DialogRef1Component];

const components = [
  ComponentsComponent,
  ComponentNavComponent,
  ComponentViewerComponent,
  CategoriesComponent,
  AccordionDemo1Component,
  AccordionDemo2Component,
  AccordionDocsComponent,
  AvatarDemo1Component,
  AvatarDemo2Component,
  AvatarDemo3Component,
  AccordionDemo3Component,
  AccordionDemo4Component,
  AccordionDemo5Component,
  AvatarDocsComponent,
  BadgeDemo1Component,
  BadgeDemo2Component,
  BadgeDemo3Component,
  BadgeDemo4Component,
  BadgeDemo5Component,
  BadgeDemo6Component,
  BadgeDemo7Component,
  BadgeDocsComponent,
  ButtonDemo1Component,
  ButtonDemo2Component,
  ButtonDemo3Component,
  ButtonDemo4Component,
  ButtonDemo5Component,
  ButtonDocsComponent,
  CardDemo1Component,
  CardDemo2Component,
  CardDemo3Component,
  CardDocsComponent,
  CategoriesComponent,
  CarouselDemo1Component,
  CarouselDemo2Component,
  CarouselDemo3Component,
  CarouselDocsComponent,
  CheckboxDemo1Component,
  CheckboxDemo2Component,
  CheckboxDemo3Component,
  CheckboxDemo4Component,
  CheckboxDemo5Component,
  CheckboxDocsComponent,
  DatepickerDocsComponent,
  DatepickerDemo1Component,
  DialogDemo1Component,
  DialogDemo2Component,
  DialogRef2Component,
  DialogDemo3Component,
  DialogDemo4Component,
  DialogDocsComponent,
  DividerDemo1Component,
  DividerDemo2Component,
  DividerDemo3Component,
  DividerDocsComponent,
  DrawerDemo1Component,
  DividerDemo4Component,
  DrawerDemo2Component,
  DrawerDemo3Component,
  DrawerDocsComponent,
  DropdownDocsComponent,
  DropdownDemo1Component,
  DropdownDemo2Component,
  GridDemo1Component,
  GridDemo2Component,
  GridDemo3Component,
  GridDemo4Component,
  GridDocsComponent,
  InputDemo1Component,
  InputDemo3Component,
  InputDemo5Component,
  InputDocsComponent,
  ProgressDemo1Component,
  ProgressDemo2Component,
  ProgressDemo3Component,
  ProgressDemo4Component,
  ProgressDocsComponent,
  RadioButtonDemo1Component,
  RadioButtonDemo2Component,
  RadioButtonDemo3Component,
  RadioButtonDemo4Component,
  RadioButtonDemo5Component,
  RadioButtonDocsComponent,
  RateDemo1Component,
  RateDemo2Component,
  RateDemo3Component,
  RateDemo4Component,
  RateDocsComponent,
  SelectDemo1Component,
  SelectDemo2Component,
  SelectDemo3Component,
  SelectDocsComponent,
  SignatureDocsComponent,
  SignatureDemo1Component,
  SwitchDemo1Component,
  SwitchDemo2Component,
  SwitchDemo3Component,
  SwitchDemo4Component,
  SwitchDocsComponent,
  TabDemo1Component,
  TabDemo2Component,
  TabDemo3Component,
  TabDemo4Component,
  TabDemo5Component,
  TabDemo6Component,
  TabDemo7Component,
  TabDocsComponent,
  TableDemo1Component,
  TableDemo2Component,
  TableDemo3Component,
  TableDemo4Component,
  TableDocsComponent,
  TagDemo1Component,
  TagDemo2Component,
  TagDemo3Component,
  TagDemo4Component,
  TagDocsComponent,
  TimelineDemo1Component,
  TimelineDemo2Component,
  TimelineDemo3Component,
  TimelineDemo4Component,
  TimelineDocsComponent,
  PaginatorDocsComponent,
  PaginatorDemo1Component,
  PaginatorDemo2Component,
];

@NgModule({
  declarations: [components],
  exports: [components, standalone],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighlightModule,
    ComponentsRoutingModule,
    NgxEagleModule,
    standalone,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        },
      },
    },
  ],
})
export class ComponentsModule { }
