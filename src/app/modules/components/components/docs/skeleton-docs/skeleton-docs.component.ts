import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Property } from '../../interfaces/property.interface';
import { Tabs } from '../../interfaces/tabs.interface';

@Component({
  selector: 'app-skeleton-docs',
  templateUrl: './skeleton-docs.component.html'
})
export class SkeletonDocsComponent  implements OnInit {
  moduleImport = "import { SkeletonModule } from 'ngx-eagle/skeleton';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesSkeleton: Property[] = [];
  variation1DemoSkeleton!: Tabs[];
  variation2DemoSkeleton!: Tabs[];
  variation3DemoSkeleton!: Tabs[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoSkeleton = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/skeleton/skeleton-demo1/skeleton-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/skeleton/skeleton-demo1/skeleton-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/skeleton/skeleton-demo1/skeleton-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation2DemoSkeleton = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/skeleton/skeleton-demo2/skeleton-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/skeleton/skeleton-demo2/skeleton-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/skeleton/skeleton-demo2/skeleton-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.variation3DemoSkeleton = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/skeleton/skeleton-demo3/skeleton-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/skeleton/skeleton-demo3/skeleton-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/skeleton/skeleton-demo3/skeleton-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesSkeleton = [      
      {
        property: '[width]',
        description: 'Width of the canvas',
        type: 'number',
        default: '400',
      },
      {
        property: '[height]',
        description: 'Height of the canvas',
        type: 'number',
        default: '150',
      },
      {
        property: '[pointerColors]',
        description:'Array of colors for the pointer',
        type: 'string[]',
        default: '["#000000", "#2A7CFF"]',
      },
      {
        property: '[pointerColor]',
        description:'Color of the pointer',
        type: 'string',
        default: '#000000',
      },
      {
        property: '[showClearButton]',
        description:'Show clear button',
        type: 'boolean',
        default: 'true',
      },
      {
        property: '[showPointerColors]',
        description:'Show pointer colors',
        type: 'boolean',
        default: 'true',
      },
      {
        property: '(skeletonComplete)',
        description:'Event emitted when the skeleton is completed',
        type: 'EventEmitter<string>',
        default: '-',
      },
    ];
  }
}
