import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions,
} from 'ngx-highlightjs';

import { ComponentRoutingModule } from './component-routing.module';

import { BadgeModule } from 'ngx-eagle/badge';
import { ButtonModule } from 'ngx-eagle/button';
import { CardModule } from 'ngx-eagle/card';
//import { CarouselModule } from 'ngx-eagle/carousel';
import { DialogModule } from 'ngx-eagle/dialog';
import { DividerModule } from 'ngx-eagle/divider';
import { ExpansionPanelModule } from 'ngx-eagle/expansion-panel';
import { SwitchModule } from 'ngx-eagle/switch';
import { TabModule } from 'ngx-eagle/tab';
import { TagModule } from 'ngx-eagle/tag';
import { TimelineModule } from 'ngx-eagle/timeline';
//import { PieChartModule } from 'ngx-eagle/pie-chart';

import { GuidesComponent } from '../guides/pages/guides/guides.component';
import { ComponentNavComponent } from './components/component-nav/component-nav.component';
import { ComponentSidenavComponent } from './pages/component-sidenav/component-sidenav.component';
import { ComponentViewerComponent } from './components/component-viewer/component-viewer.component';

import { BadgeDocsComponent } from './docs/badge-docs/badge-docs.component';
import { BadgeDemo1Component } from './demos/badge/badge-demo1/badge-demo1.component';
import { ButtonDocsComponent } from './docs/button-docs/button-docs.component';
import { ButtonDemo1Component } from './demos/button/button-demo1/button-demo1.component';
import { ButtonDemo2Component } from './demos/button/button-demo2/button-demo2.component';
import { ButtonDemo3Component } from './demos/button/button-demo3/button-demo3.component';
import { ButtonDemo4Component } from './demos/button/button-demo4/button-demo4.component';
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
import { GridModule } from 'projects/ngx-eagle/grid/grid.module';
import { GridDemo4Component } from './demos/grid/grid-demo4/grid-demo4.component';
import { DialogRef1Component } from './demos/dialog/dialog-ref1/dialog-ref1.component';
import { TimelineDemo1Component } from './demos/timeline/timeline-demo1/timeline-demo1.component';
import { TimelineDocsComponent } from './docs/timeline-docs/timeline-docs.component';
import { PieChartDocsComponent } from './docs/pie-chart-docs/pie-chart-docs.component';
import { PieChartDemo1Component } from './demos/pie-chart/pie-chart-demo1/pie-chart-demo1.component';
import { PieChartModule } from 'projects/ngx-eagle/pie-chart';
import { LineChartModule } from 'projects/ngx-eagle/line-chart';
import { LineChartDemo1Component } from './demos/line-chart/line-chart-demo1/line-chart-demo1.component';
import { LineChartDocsComponent } from './docs/line-chart-docs/line-chart-docs.component';
import { CarouselModule } from 'projects/ngx-eagle/carousel';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml'),
  };
}

const components = [
  GuidesComponent,
  ComponentNavComponent,
  ComponentSidenavComponent,
  ComponentViewerComponent,
  BadgeDocsComponent,
  BadgeDemo1Component,
  ButtonDocsComponent,
  ButtonDemo1Component,
  ButtonDemo2Component,
  ButtonDemo3Component,
  ButtonDemo4Component,
  CardDocsComponent,
  CardDemo1Component,
  CarouselDocsComponent,
  CarouselDemo1Component,
  DialogDocsComponent,
  DialogDemo1Component,
  DialogRef1Component,
  DividerDocsComponent,
  DividerDemo1Component,
  AccordionDocsComponent,
  AccordionDemo1Component,
  SwitchDocsComponent,
  SwitchDemo1Component,
  GridDocsComponent,
  GridDemo1Component,
  GridDemo2Component,
  GridDemo3Component,
  GridDemo4Component,
  PieChartDocsComponent,
  PieChartDemo1Component,
  TabDocsComponent,
  TabDemo1Component,
  TagDocsComponent,
  TagDemo1Component,
  TabDemo2Component,
  TabDemo3Component,
  TimelineDocsComponent,
  TimelineDemo1Component,
  LineChartDocsComponent,
  LineChartDemo1Component
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    HttpClientModule,
    HighlightModule,
    FormsModule,
    BadgeModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    DialogModule,
    DividerModule,
    ExpansionPanelModule,
    GridModule,
    PieChartModule,
    LineChartModule,
    SwitchModule,
    TabModule,
    TagModule,
    TimelineModule,
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
