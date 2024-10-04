import { Component, OnInit } from '@angular/core';
import { Property } from '../../interfaces/property.interface';
import { HttpClient } from '@angular/common/http';
import { Tabs } from '../../interfaces/tabs.interface';

@Component({
  selector: 'app-dropdown-docs',
  templateUrl: './dropdown-docs.component.html'
})
export class DropdownDocsComponent implements OnInit {
  moduleImport = "import { DropdownModule } from 'ngx-eagle/dropdown';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesDropdown: Property[] = [];
  variation1Demodropdown!: Tabs[];
  variation2Demodropdown!: Tabs[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.variation1Demodropdown = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/dropdown/dropdown-demo1/dropdown-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/dropdown/dropdown-demo1/dropdown-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/dropdown/dropdown-demo1/dropdown-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2Demodropdown = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/dropdown/dropdown-demo2/dropdown-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/dropdown/dropdown-demo2/dropdown-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/dropdown/dropdown-demo2/dropdown-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesDropdown = [
      {
        property: '[DropdownMenu]',
        description: 'A TemplateRef that represents the content of the dropdown menu. It defines what will be displayed inside the dropdown when it is open.',
        type: 'TemplateRef<any>',
        default: '-',
      },
      {
        property: '[placement]',
        description: 'Determines the position of the dropdown relative to the element it is attached to. It can be one of the following values: bottomLeft, bottomCenter, bottomRight, topLeft, topCenter, topRight. This controls whether the dropdown appears below, above, or to the sides of the element.',
        type: 'PlacementType',
        default: 'bottomLeft',
      },
      {
        property: '[hoverEnabled]',
        description: 'A boolean that enables or disables the opening and closing of the dropdown on hover. It is enabled by default (true), allowing the dropdown to be controlled by hover in addition to click.',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '(openChange)',
        description: "An EventEmitter that emits a boolean value whenever the dropdown changes its open or closed state. This allows other components to respond to the dropdown's state changes.",
        type: 'EventEmitter<boolean>',
        default: '-',
      }
    ];
  }
}
