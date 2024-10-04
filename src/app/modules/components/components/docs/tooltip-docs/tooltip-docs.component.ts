import { Component, OnInit } from '@angular/core';
import { Property } from '../../interfaces/property.interface';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tooltip-docs',
  templateUrl: './tooltip-docs.component.html'
})
export class TooltipDocsComponent implements OnInit {
  moduleImport = "import { TooltipModule } from 'ngx-eagle/tooltip';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesTooltip: Property[] = [];
  variation1DemoTooltip!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoTooltip = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tooltip/tooltip-demo1/tooltip-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tooltip/tooltip-demo1/tooltip-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tooltip/tooltip-demo1/tooltip-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesTooltip = [      
      {
        property: '[tooltipText]',
        description: 'Text to be displayed in the tooltip',
        type: 'string',
        default: '',
      },
      {
        property: '[tooltipPosition]',
        description: 'Position of the tooltip',
        type: 'Position',
        default: 'top',
      }
    ];
  }
}