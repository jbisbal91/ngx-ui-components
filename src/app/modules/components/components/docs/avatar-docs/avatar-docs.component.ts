import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-avatar-docs',
  templateUrl: './avatar-docs.component.html',
})
export class AvatarDocsComponent implements OnInit {
  moduleImport = "import { AvatarModule } from 'ngx-eagle/avatar';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesAvatar: Property[] = [];
  propertiesAvatarGroup: Property[] = [];
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

    this.propertiesAvatar = [
      {
        property: '[ngxIcon]',
        description: 'Developing',
        type: '-',
        default: '-',
      },
      {
        property: '[ngxSrc]',
        description: 'The address of the image for an image avatar',
        type: 'string',
        default: '-',
      },
      {
        property: '[ngxText]',
        description:
          'Only the first two initials are allowed and the color will depend on the first initial.',
        type: 'string',
        default: '-',
      },
    ];
  }
}
