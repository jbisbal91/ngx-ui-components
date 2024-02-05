import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-avatar-docs',
  templateUrl: './avatar-docs.component.html',
})
export class AvatarDocsComponent implements OnInit {
  variation1DemoAvatar!: Tabs[];
  variation2DemoAvatar!: Tabs[];
  variation3DemoAvatar!: Tabs[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoAvatar = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/avatar/avatar-demo1/avatar-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/avatar/avatar-demo1/avatar-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/avatar/avatar-demo1/avatar-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoAvatar = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/avatar/avatar-demo2/avatar-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/avatar/avatar-demo2/avatar-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/avatar/avatar-demo2/avatar-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoAvatar = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/avatar/avatar-demo3/avatar-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/avatar/avatar-demo3/avatar-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/avatar/avatar-demo3/avatar-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
