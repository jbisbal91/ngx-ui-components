import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-grid-docs',
  templateUrl: './grid-docs.component.html',
  styleUrls: ['./grid-docs.component.scss'],
})
export class GridDocsComponent implements OnInit {
  moduleImport = "import { GridModule } from 'ngx-eagle/grid';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesRow: Property[] = [];
  propertiesCol: Property[] = [];
  variation1DemoGrid!: Tabs[];
  variation2DemoGrid!: Tabs[];
  variation3DemoGrid!: Tabs[];
  variation4DemoGrid!: Tabs[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoGrid = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/grid/grid-demo1/grid-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/grid/grid-demo1/grid-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/grid/grid-demo1/grid-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoGrid = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/grid/grid-demo2/grid-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/grid/grid-demo2/grid-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/grid/grid-demo2/grid-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoGrid = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/grid/grid-demo3/grid-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/grid/grid-demo3/grid-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/grid/grid-demo3/grid-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation4DemoGrid = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/grid/grid-demo4/grid-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/grid/grid-demo4/grid-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/grid/grid-demo4/grid-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesRow = [
      {
        property: '[ngxAlign]',
        description: 'The vertical alignment',
        type: "'top' | 'middle' | 'bottom'",
        default: '-',
      },
      {
        property: '[ngxGutter]',
        description: 'Grid spacing is a number',
        type: 'number',
        default: '0',
      },
      {
        property: '[ngxJustify]',
        description: 'Horizontal arrangement',
        type: "'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'",
        default: '-',
      },
      {
        property: '[ngxSpan]',
        description: 'Define a new grid system',
        type: 'number',
        default: '24',
      },
    ];

    this.propertiesCol = [
      {
        property: '[ngxSpan]',
        description:
          'raster number of cells to occupy, 0 corresponds to display: none',
        type: "number",
        default: '24',
      }
    ];
  }
}
