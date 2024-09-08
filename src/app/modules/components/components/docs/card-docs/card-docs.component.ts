import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-docs',
  templateUrl: './card-docs.component.html',
})
export class CardDocsComponent implements OnInit {
  moduleImport = "import { CardModule } from 'ngx-eagle/card';";
  variation1DemoCard!: Tabs[];
  variation2DemoCard!: Tabs[];
  variation3DemoCard!: Tabs[];
  displayedColumns: string[] = [
    'Element',
    'Decorator',
    'Characteristic',
    'Description',
  ];
  elementsCard: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoCard = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/card/card-demo1/card-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/card/card-demo1/card-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/card/card-demo1/card-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoCard = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/card/card-demo2/card-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/card/card-demo2/card-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/card/card-demo2/card-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoCard = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/card/card-demo3/card-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/card/card-demo3/card-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/card/card-demo3/card-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    
    this.elementsCard = [
      {
        element: '<ngx-card>',
        decorator: 'component',
        characteristic: 'standalone',
        description:
          'Content container for text, photos, and actions in the context of a single subject.',
      },
      {
        element: '<ngx-card-header>',
        decorator: 'component',
        characteristic: 'standalone',
        description: 'Section anchored to the top of the card (adds padding)',
      },
      {
        element: '<ngx-card-content>',
        decorator: 'component',
        characteristic: 'standalone',
        description: 'Primary card content (adds padding)',
      },
      {
        element: '<ngx-card-actions>',
        decorator: 'component',
        characteristic: 'standalone',
        description:
          'Container for buttons at the bottom of the card (adds padding)',
      },
      {
        element: 'ngx-card-avatar',
        decorator: 'directive',
        characteristic: 'standalone',
        description:
          'Avatar image of the card, you can use the <ngx-avatar> component',
      },
      {
        element: 'ngx-card-image',
        decorator: 'directive',
        characteristic: 'standalone',
        description: 'Card image. Stretches the image to the container width.',
      },
    ];
  }
}
