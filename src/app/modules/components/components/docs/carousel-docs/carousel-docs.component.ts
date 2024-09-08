import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-carousel-docs',
  templateUrl: './carousel-docs.component.html',
})
export class CarouselDocsComponent implements OnInit {
  moduleImport = "import { CarouselModule } from 'ngx-eagle/carousel';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesCarousel: Property[] = [];
  variation1DemoCarousel!: Tabs[];
  variation2DemoCarousel!: Tabs[];
  variation3DemoCarousel!: Tabs[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoCarousel = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/carousel/carousel-demo1/carousel-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/carousel/carousel-demo1/carousel-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/carousel/carousel-demo1/carousel-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoCarousel = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/carousel/carousel-demo2/carousel-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/carousel/carousel-demo2/carousel-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/carousel/carousel-demo2/carousel-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoCarousel = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/carousel/carousel-demo3/carousel-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/carousel/carousel-demo3/carousel-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/carousel/carousel-demo3/carousel-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesCarousel = [
      {
        property: '[ngxAutoPlay]',
        description: 'Whether to scroll automatically',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[ngxAutoPlaySpeed]',
        description: 'Duration (milliseconds), does not scroll when set to 0',
        type: 'number',
        default: '3000',
      },
      {
        property: '[ngxDotPosition]',
        description: 'The position of the dots, which can be one of top bottom ',
        type: "'bottom'|'top'",
        default: 'bottom',
      },
    ];
  }
}
