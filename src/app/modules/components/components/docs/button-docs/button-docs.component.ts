import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tabs } from '../../interfaces/tabs.interface';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-button-docs',
  templateUrl: './button-docs.component.html',
})
export class ButtonDocsComponent implements OnInit {
  moduleImport = "import { ButtonModule } from 'ngx-eagle/button';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesBadge: Property[] = [];
  variation1DemoButton!: Tabs[];
  variation2DemoButton!: Tabs[];
  variation3DemoButton!: Tabs[];
  variation4DemoButton!: Tabs[];
  variation5DemoButton!: Tabs[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.variation1DemoButton = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo1/button-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo1/button-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo1/button-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoButton = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo2/button-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo2/button-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo2/button-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoButton = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo3/button-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo3/button-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo3/button-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation4DemoButton = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo4/button-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo4/button-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo4/button-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation5DemoButton = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo5/button-demo5.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo5/button-demo5.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/button/button-demo5/button-demo5.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.propertiesBadge = [
      {
        property: '[buttonFillMode]',
        description: 'Represents four types of fill mode.',
        type: "'filled' | 'outlined' | 'text' | 'elevated'",
        default: 'filled',
      },
      {
        property: '[buttonRounded]',
        description: 'Represents four types of border radius.',
        type: "'small' | 'medium' | 'large' | 'full'",
        default: 'medium',
      },
      {
        property: '[buttonSize]',
        description: 'Represents three types of size.',
        type: "'small' | 'medium' | 'large'",
        default: 'medium',
      },
    ];
  }
}
