import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEagleModule } from 'src/app/shared/ngx-eagle/ngx-eagle.module';

import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions,
} from 'ngx-highlightjs';

import { ComponentRoutingModule } from './component-routing.module';

import { GuidesComponent } from '../guides/pages/guides/guides.component';
import { ComponentNavComponent } from './components/component-nav/component-nav.component';
import { ComponentSidenavComponent } from './pages/component-sidenav/component-sidenav.component';
import { ComponentViewerComponent } from './components/component-viewer/component-viewer.component';
import { BadgeDocsComponent } from './docs/badge-docs/badge-docs.component';
import { BadgeDemo1Component } from './demos/badge/badge-demo1/badge-demo1.component';
import { ButtonDocsComponent } from './docs/button-docs/button-docs.component';
import { ButtonDemo1Component } from './demos/button/button-demo1/button-demo1.component';
import { CardDocsComponent } from './docs/card-docs/card-docs.component';
import { CardDemo1Component } from './demos/card/card-demo1/card-demo1.component';
import { CarouselDocsComponent } from './docs/carousel-docs/carousel-docs.component';
import { CarouselDemo1Component } from './demos/carousel/carousel-demo1/carousel-demo1.component';
import { DialogDocsComponent } from './docs/dialog-docs/dialog-docs.component';
import { DialogDemo1Component } from './demos/dialog/dialog-demo1/dialog-demo1.component';
import { DividerDocsComponent } from './docs/divider-docs/divider-docs.component';
import { DividerDemo1Component } from './demos/divider/divider-demo1/divider-demo1.component';
import { AccordionDocsComponent } from './docs/accordion-docs/accordion-docs.component';
import { AccordionDemo1Component } from './demos/accordion/accordion-demo1/accordion-demo1.component';
import { SwitchDocsComponent } from './docs/switch-docs/switch-docs.component';
import { SwitchDemo1Component } from './demos/switch/switch-demo1/switch-demo1.component';
import { TabDocsComponent } from './docs/tab-docs/tab-docs.component';
import { TabDemo1Component } from './demos/tabs/tab-demo1/tab-demo1.component';
import { TabDemo2Component } from './demos/tabs/tab-demo2/tab-demo2.component';
import { TabDemo3Component } from './demos/tabs/tab-demo3/tab-demo3.component';
import { TagDocsComponent } from './docs/tag-docs/tag-docs.component';
import { TagDemo1Component } from './demos/tag/tag-demo1/tag-demo1.component';
import { GridDocsComponent } from './docs/grid-docs/grid-docs.component';
import { GridDemo1Component } from './demos/grid/grid-demo1/grid-demo1.component';
import { GridDemo2Component } from './demos/grid/grid-demo2/grid-demo2.component';
import { GridDemo3Component } from './demos/grid/grid-demo3/grid-demo3.component';
import { GridDemo4Component } from './demos/grid/grid-demo4/grid-demo4.component';
import { DialogRef1Component } from './demos/dialog/dialog-ref1/dialog-ref1.component';
import { TimelineDemo1Component } from './demos/timeline/timeline-demo1/timeline-demo1.component';
import { TimelineDocsComponent } from './docs/timeline-docs/timeline-docs.component';
import { PieChartDocsComponent } from './docs/pie-chart-docs/pie-chart-docs.component';
import { PieChartDemo1Component } from './demos/pie-chart/pie-chart-demo1/pie-chart-demo1.component';
import { LineChartModule } from 'projects/ngx-eagle/line-chart';
import { LineChartDemo1Component } from './demos/line-chart/line-chart-demo1/line-chart-demo1.component';
import { LineChartDocsComponent } from './docs/line-chart-docs/line-chart-docs.component';
import { InputDemo1Component } from './demos/input/input-demo1/input-demo1.component';
import { InputDocsComponent } from './docs/input-docs/input-docs.component';
import { InputDemo2Component } from './demos/input/input-demo2/input-demo2.component';
import { SelectDemo1Component } from './demos/select/select-demo1/select-demo1.component';
import { SelectDemo2Component } from './demos/select/select-demo2/select-demo2.component';
import { SelectDocsComponent } from './docs/select-docs/select-docs.component';
import { TableDocsComponent } from './docs/table-docs/table-docs.component';
import { TableDemo1Component } from './demos/table/table-demo1/table-demo1.component';
import { AvatarDemo1Component } from './demos/avatar/avatar-demo1/avatar-demo1.component';
import { AvatarDocsComponent } from './docs/avatar/avatar-docs.component';
import { AvatarDemo2Component } from './demos/avatar/avatar-demo2/avatar-demo2.component';
import { AvatarDemo3Component } from './demos/avatar/avatar-demo3/avatar-demo3.component';
import { DrawerDemo1Component } from './demos/drawer/drawer-demo1/drawer-demo1.component';
import { DrawerDocsComponent } from './docs/drawer-docs/drawer-docs.component';
import { ProgressDocsComponent } from './docs/progress-docs/progress-docs.component';
import { ProgressDemo1Component } from './demos/progress/progress-demo1/progress-demo1.component';
import { RateDocsComponent } from './docs/rate-docs/rate-docs.component';
import { RateDemo1Component } from './demos/rate/rate-demo1/rate-demo1.component';
import { CheckboxDocsComponent } from './docs/checkbox-docs/checkbox-docs.component';
import { CheckboxDemo1Component } from './demos/checkbox/checkbox-demo1/checkbox-demo1.component';
import { RadioDocsComponent } from './docs/radio-docs/radio-docs.component';
import { RadioDemo1Component } from './demos/radio/radio-demo1/radio-demo1.component';
import { CheckboxDemo2Component } from './demos/checkbox/checkbox-demo2/checkbox-demo2.component';
import { TimelineDemo2Component } from './demos/timeline/timeline-demo2/timeline-demo2.component';
import { TimelineDemo3Component } from './demos/timeline/timeline-demo3/timeline-demo3.component';
import { TimelineDemo4Component } from './demos/timeline/timeline-demo4/timeline-demo4.component';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml'),
  };
}

const components = [
  AccordionDemo1Component,
  AccordionDocsComponent,
  AvatarDemo1Component,
  AvatarDemo2Component,
  AvatarDemo3Component,
  AvatarDocsComponent,
  BadgeDemo1Component,
  BadgeDocsComponent,
  ButtonDemo1Component,
  ButtonDocsComponent,
  CardDemo1Component,
  CardDocsComponent,
  CarouselDemo1Component,
  CarouselDocsComponent,
  ComponentNavComponent,
  ComponentSidenavComponent,
  ComponentViewerComponent,
  DialogDemo1Component,
  DialogDocsComponent,
  DialogRef1Component,
  DividerDemo1Component,
  DividerDocsComponent,
  DrawerDemo1Component,
  DrawerDocsComponent,
  GridDemo1Component,
  GridDemo2Component,
  GridDemo3Component,
  GridDemo4Component,
  GridDocsComponent,
  GuidesComponent,
  InputDemo1Component,
  InputDemo2Component,
  InputDocsComponent,
  LineChartDemo1Component,
  LineChartDocsComponent,
  PieChartDemo1Component,
  PieChartDocsComponent,
  ProgressDocsComponent,
  ProgressDemo1Component,
  RadioDocsComponent,
  RadioDemo1Component,
  RateDocsComponent,
  RateDemo1Component,
  SelectDemo1Component,
  SelectDemo2Component,
  SelectDocsComponent,
  SwitchDemo1Component,
  SwitchDocsComponent,
  TabDemo1Component,
  TabDemo2Component,
  TabDemo3Component,
  TabDocsComponent,
  TableDemo1Component,
  TableDocsComponent,
  TagDemo1Component,
  TagDocsComponent,
  TimelineDemo1Component,
  TimelineDemo2Component,
  TimelineDemo3Component,
  TimelineDemo4Component,
  TimelineDocsComponent,
  CheckboxDocsComponent,
  CheckboxDemo1Component,
  CheckboxDemo2Component,
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule,
    HighlightModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxEagleModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbers: true,
        languages: getHighlightLanguages(),
      } as HighlightOptions,
    },
  ],
})
export class ComponentModule {}
