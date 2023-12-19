import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions,
} from 'ngx-highlightjs';

import { ComponentRoutingModule } from './component-routing.module';

import { ComponentCategoryListComponent } from './components/component-category-list/component-category-list.component';
import { ComponentNavComponent } from './components/component-nav/component-nav.component';
import { ComponentSidenavComponent } from './pages/component-sidenav/component-sidenav.component';
import { ComponentViewerComponent } from './components/component-viewer/component-viewer.component';
import { GuidesComponent } from '../guides/pages/guides/guides.component';
import { TabDocsComponent } from './docs/tab-docs/tab-docs.component';
import {
  ButtonModule,
  CardModule,
  DialogModule,
  DividerModule,
  ExpansionPanelModule,
  IconModule,
  TabModule,
} from 'projects/ngx-ui-components/src/public-api';
import { TabDemo1Component } from './demos/tabs-demos/tab-demo1/tab-demo1.component';
import { DialogDocsComponent } from './docs/dialog-docs/dialog-docs.component';
import { DialogDemo1Component } from './demos/dialog-demos/dialog-demo1/dialog-demo1.component';
import { ButtonDocsComponent } from './docs/button-docs/button-docs.component';
import { ButtonDemo1Component } from './demos/button/button-demo1/button-demo1.component';
import { ButtonDemo2Component } from './demos/button/button-demo2/button-demo2.component';
import { ButtonDemo3Component } from './demos/button/button-demo3/button-demo3.component';
import { ButtonDemo4Component } from './demos/button/button-demo4/button-demo4.component';
import { AccordionDocsComponent } from './docs/accordion-docs/accordion-docs.component';
import { AccordionDemo1Component } from './demos/accordion/accordion-demo1/accordion-demo1.component';
import { DividerDocsComponent } from './docs/divider-docs/divider-docs.component';
import { DividerDemo1Component } from './demos/divider/divider-demo1/divider-demo1.component';
import { CardDocsComponent } from './docs/card-docs/card-docs.component';
import { CardDemo1Component } from './demos/card/card-demo1/card-demo1.component';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml'),
  };
}

const components = [
  ComponentCategoryListComponent,
  GuidesComponent,
  ComponentNavComponent,
  ComponentSidenavComponent,
  ComponentViewerComponent,
  TabDocsComponent,
  TabDemo1Component,
  DialogDocsComponent,
  DialogDemo1Component,
  ButtonDemo1Component,
  ButtonDocsComponent,
  ButtonDemo2Component,
  ButtonDemo3Component,
  ButtonDemo4Component,
  AccordionDocsComponent,
  AccordionDemo1Component,
  DividerDocsComponent,
  DividerDemo1Component,
  CardDocsComponent,
  CardDemo1Component
];

@NgModule({
  declarations: [components, CardDocsComponent, CardDemo1Component],
  exports: [components],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    HttpClientModule,
    HighlightModule,
    TabModule,
    ButtonModule,
    DividerModule,
    DialogModule,
    ExpansionPanelModule,
    CardModule,
    IconModule,
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
