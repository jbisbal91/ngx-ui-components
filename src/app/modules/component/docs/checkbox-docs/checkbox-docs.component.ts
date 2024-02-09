import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkbox-docs',
  templateUrl: './checkbox-docs.component.html',
  styleUrls: ['./checkbox-docs.component.scss']
})
export class CheckboxDocsComponent implements OnInit {
  variation1DemoCheckbox!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoCheckbox = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo1/checkbox-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo1/checkbox-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/checkbox/checkbox-demo1/checkbox-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
