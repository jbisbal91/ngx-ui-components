import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-badge-docs',
  templateUrl: './badge-docs.component.html',
})
export class BadgeDocsComponent implements OnInit {
  moduleImport = "import { BadgeModule } from 'ngx-eagle/badge';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesBadge: Property[] = [];
  variation1DemoBadge!: Tabs[];
  variation2DemoBadge!: Tabs[];
  variation3DemoBadge!: Tabs[];
  variation4DemoBadge!: Tabs[];
  variation5DemoBadge!: Tabs[];
  variation6DemoBadge!: Tabs[];
  variation7DemoBadge!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoBadge = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo1/badge-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo1/badge-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo1/badge-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoBadge = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo2/badge-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo2/badge-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo2/badge-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoBadge = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo3/badge-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo3/badge-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo3/badge-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation4DemoBadge = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo4/badge-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo4/badge-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo4/badge-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation5DemoBadge = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo5/badge-demo5.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo5/badge-demo5.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo5/badge-demo5.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation6DemoBadge = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo6/badge-demo6.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo6/badge-demo6.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo6/badge-demo6.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation7DemoBadge = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo7/badge-demo7.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo7/badge-demo7.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo7/badge-demo7.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesBadge = [
      {
        property: '[ngxBadge]',
        description:
          'Declares the directive and allows the number to be displayed on the Badge.',
        type: 'number',
        default: '-',
      },
      {
        property: '[ngxBadgeColor]',
        description: 'Customize Badge dot color',
        type: '{ backgroundColor: string; overlayColor: string } | string',
        default: '-',
      },
      {
        property: '[ngxBadgeHidden]',
        description: 'Allows you to hide or show the badge.',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[ngxBadgePosition]',
        description:
          'Allows you to place the badge at the beginning or at the end.',
        type: "'before' | 'after'",
        default: 'after',
      },
      {
        property: '[ngxBadgeSize]',
        description: 'Set size on badge.',
        type: "'small' | 'medium' | 'large'",
        default: 'small',
      },
      {
        property: '[ngxOverflowCount]',
        description: 'Max count to show.',
        type: 'number',
        default: '99',
      },
    ];
  }
}
