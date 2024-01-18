import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input-docs',
  templateUrl: './input-docs.component.html',
  styleUrls: ['./input-docs.component.scss'],
})
export class InputDocsComponent implements OnInit {
  variation1DemoInput!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoInput = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo1/input-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo1/input-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/input/input-demo1/input-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
