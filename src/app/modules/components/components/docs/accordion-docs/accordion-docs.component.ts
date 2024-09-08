import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-accordion-docs',
  templateUrl: './accordion-docs.component.html',
})
export class AccordionDocsComponent implements OnInit {
  moduleImport =
    "import { ExpansionPanelModule } from 'ngx-eagle/expansion-panel';";

  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesAccordion: Property[] = [];
  propertiesExpansionPanel: Property[] = [];
  variation1DemoAccordion!: Tabs[];
  variation2DemoAccordion!: Tabs[];
  variation3DemoAccordion!: Tabs[];
  variation4DemoAccordion!: Tabs[];
  variation5DemoAccordion!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoAccordion = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo1/accordion-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo1/accordion-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo1/accordion-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoAccordion = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo2/accordion-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo2/accordion-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo2/accordion-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoAccordion = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo3/accordion-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo3/accordion-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo3/accordion-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation4DemoAccordion = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo4/accordion-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo4/accordion-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo4/accordion-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation5DemoAccordion = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo5/accordion-demo5.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo5/accordion-demo5.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo5/accordion-demo5.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesAccordion = [
      {
        property: '[multi]',
        description:
          'Whether the accordion should allow multiple expanded accordion items simultaneously.',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[ngxColor]',
        description: 'Customize color',
        type: 'string',
        default: '-',
      },
      {
        property: '[ngxExpandIconPosition]',
        description: 'Set expand icon position',
        type: "'left' | 'right'",
        default: 'left',
      },
      {
        property: '[ngxType]',
        description: 'Expansion panel type',
        type: "'card' | 'bordered' | 'default'",
        default: 'default',
      },
    ];

    this.propertiesExpansionPanel = [
      {
        property: '[disabled]',
        description: 'Disables the panel and cannot be accessed',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[expanded]',
        description: 'Sets the expanded state of the expansion panel.',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[hideToggle]',
        description: 'Whether the expansion indicator should be hidden.',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[ngxLabel]',
        description: 'Title of the panel',
        type: 'any | TemplateRef<void>',
        default: '-',
      },
    ];
  }
}
