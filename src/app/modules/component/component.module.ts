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

import { BadgeModule } from 'ngx-ui-jbisbal/badge';
import { ButtonModule } from 'ngx-ui-jbisbal/button';
import { CardModule } from 'ngx-ui-jbisbal/card';
import { CarouselModule } from 'ngx-ui-jbisbal/carousel';
import { DividerModule } from 'ngx-ui-jbisbal/divider';
import { ExpansionPanelModule } from 'ngx-ui-jbisbal/expansion-panel';
import { SwitchModule } from 'ngx-ui-jbisbal/switch';
import { TabModule } from 'ngx-ui-jbisbal/tab';
import { TagModule } from 'ngx-ui-jbisbal/tag';

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
import { DialogDemo1Component } from './demos/dialog-demos/dialog-demo1/dialog-demo1.component';
import { DividerDocsComponent } from './docs/divider-docs/divider-docs.component';
import { DividerDemo1Component } from './demos/divider/divider-demo1/divider-demo1.component';
import { AccordionDocsComponent } from './docs/accordion-docs/accordion-docs.component';
import { AccordionDemo1Component } from './demos/accordion/accordion-demo1/accordion-demo1.component';
import { SwitchDocsComponent } from './docs/switch-docs/switch-docs.component';
import { SwitchDemo1Component } from './demos/switch/switch-demo1/switch-demo1.component';
import { TabDocsComponent } from './docs/tab-docs/tab-docs.component';
import { TabDemo1Component } from './demos/tabs-demos/tab-demo1/tab-demo1.component';
import { TagDocsComponent } from './docs/tag-docs/tag-docs.component';
import { TagDemo1Component } from './demos/tag/tag-demo1/tag-demo1.component';
import { GridDocsComponent } from './docs/grid-docs/grid-docs.component';
import { GridDemo1Component } from './demos/grid/grid-demo1/grid-demo1.component';

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
  DividerDocsComponent,
  DividerDemo1Component,
  AccordionDocsComponent,
  AccordionDemo1Component,
  SwitchDocsComponent,
  SwitchDemo1Component,
  GridDocsComponent,
  GridDemo1Component,
  TabDocsComponent,
  TabDemo1Component,
  TagDocsComponent,
  TagDemo1Component,
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
    DividerModule,
    ExpansionPanelModule,
    SwitchModule,
    TabModule,
    TagModule,
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
