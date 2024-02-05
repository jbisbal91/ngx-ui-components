import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select-docs',
  templateUrl: './select-docs.component.html',
})
export class SelectDocsComponent implements OnInit {
  variation1DemoSelect!: Tabs[];
  variation2DemoSelect!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoSelect = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo1/select-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo1/select-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo1/select-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoSelect = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo2/select-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo2/select-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/select/select-demo2/select-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
