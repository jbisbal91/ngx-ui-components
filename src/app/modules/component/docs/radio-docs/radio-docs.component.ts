import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-radio-docs',
  templateUrl: './radio-docs.component.html',
  styleUrls: ['./radio-docs.component.scss'],
})
export class RadioDocsComponent implements OnInit {
  variation1DemoRadio!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoRadio = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio/radio-demo1/radio-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio/radio-demo1/radio-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/radio/radio-demo1/radio-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
