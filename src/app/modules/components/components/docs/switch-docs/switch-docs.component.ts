import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-switch-docs',
  templateUrl: './switch-docs.component.html',
})
export class SwitchDocsComponent implements OnInit {
  moduleImport = "import { SwitchModule } from 'ngx-eagle/switch';";
  variation1DemoSwitch!: Tabs[];
  variation2DemoSwitch!: Tabs[];
  variation3DemoSwitch!: Tabs[];
  variation4DemoSwitch!: Tabs[];
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesSwitch: Property[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoSwitch = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo1/switch-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo1/switch-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo1/switch-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoSwitch = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo2/switch-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo2/switch-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo2/switch-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoSwitch = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo3/switch-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo3/switch-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo3/switch-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation4DemoSwitch = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo4/switch-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo4/switch-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo4/switch-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.propertiesSwitch = [
      {
        property: '[ngModel]',
        description:
          'Determine whether the ngx-switch is checked, double binding',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '(ngModelChange)',
        description:
          'A callback function, can be executed when the checked state is changing',
        type: 'EventEmitter<boolean>',
        default: '-',
      },
      {
        property: '[ngxSize]',
        description:
          'The size of the ngx-switch, options: small default  large',
        type: "'small' | 'default' | 'large'",
        default: 'default',
      },
      {
        property: '[labelPosition]',
        description:
          "Whether the label should appear after or before the slide switch. Defaults to 'after'",
        type: "'after' | 'before'",
        default: 'after',
      },
    ];
  }
}
