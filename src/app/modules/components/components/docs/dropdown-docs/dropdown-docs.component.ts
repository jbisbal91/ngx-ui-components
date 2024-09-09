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
  
  constructor(private http: HttpClient) {}

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

    this.propertiesDropdown = [      
      {
        property: '[width]',
        description: 'Width of the canvas',
        type: 'number',
        default: '400',
      },
      {
        property: '[height]',
        description: 'Height of the canvas',
        type: 'number',
        default: '150',
      },
      {
        property: '[pointerColors]',
        description:'Array of colors for the pointer',
        type: 'string[]',
        default: '["#000000", "#2A7CFF"]',
      },
      {
        property: '[pointerColor]',
        description:'Color of the pointer',
        type: 'string',
        default: '#000000',
      },
      {
        property: '[showClearButton]',
        description:'Show clear button',
        type: 'boolean',
        default: 'true',
      },
      {
        property: '[showPointerColors]',
        description:'Show pointer colors',
        type: 'boolean',
        default: 'true',
      },
      {
        property: '(dropdownComplete)',
        description:'Event emitted when the dropdown is completed',
        type: 'EventEmitter<string>',
        default: '-',
      },
    ];
  }
}
