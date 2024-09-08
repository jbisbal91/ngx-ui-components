import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-tag-docs',
  templateUrl: './tag-docs.component.html',
})
export class TagDocsComponent implements OnInit {
  moduleImport = "import { TagModule } from 'ngx-eagle/tag';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesBadge: Property[] = [];
  variation1DemoTags!: Tabs[];
  variation2DemoTags!: Tabs[];
  variation3DemoTags!: Tabs[];
  variation4DemoTags!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoTags = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo1/tag-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo1/tag-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo1/tag-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoTags = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo2/tag-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo2/tag-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo2/tag-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoTags = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo3/tag-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo3/tag-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo3/tag-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation4DemoTags = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo4/tag-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo4/tag-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo4/tag-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.propertiesBadge = [
      {
        property: '[ngxBordered]',
        description: '[ngxBordered] allows you to show or hide the border',
        type: 'boolean',
        default: 'true',
      },
      {
        property: '[ngxColor]',
        description: 'Customize tag color',
        type: '{ backgroundColor: string; overlayColor: string } | string',
        default: '-',
      },
      {
        property: '[ngxChecked]',
        description:
          'Checked status of Tag, only works when ngxMode="checkable"',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[ngxMode]',
        description:
          '[ngxMode] represents three types of modes for displaying the tag.',
        type: "'default' | 'closeable' | 'checkable'",
        default: 'default',
      },
      {
        property: '(ngxCheckedChange)',
        description:
          'Checked status change call back, only works when ngxMode="checkable"',
        type: 'EventEmitter<boolean>',
        default: '-',
      },
      {
        property: '(ngxOnClose)',
        description:
          'Callback executed when tag is closed, only works when ngxMode="closable"',
        type: 'EventEmitter<MouseEvent>',
        default: '-',
      },
    ];
  }
}
