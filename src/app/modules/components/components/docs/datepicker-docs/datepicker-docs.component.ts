import { Component, OnInit } from '@angular/core';
import { Property } from '../../interfaces/property.interface';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datepicker-docs',
  templateUrl: './datepicker-docs.component.html',
})
export class DatepickerDocsComponent implements OnInit {
  moduleImport = "import { DatepickerModule } from 'ngx-eagle/datepicker';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesDatepicker: Property[] = [];
  variation1DemoDatepicker!: Tabs[];
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoDatepicker = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/datepicker/datepicker-demo1/datepicker-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/datepicker/datepicker-demo1/datepicker-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/datepicker/datepicker-demo1/datepicker-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesDatepicker = [      
      {
        property: '[range]',
        description: 'Range of the datepicker',
        type: 'RangeDate',
        default: '{ startDate: null, endDate: null }',
      },
      {
        property: '[format]',
        description: 'Format of the date',
        type: 'string',
        default: 'dd/MM/yyyy',
      },
      {
        property: '[firstDayOfWeek]',
        description: 'First day of the week',
        type: 'FirstDayOfWeek',
        default: 'FirstDayOfWeek.Sunday',
      },
      {
        property: '[days]',
        description: 'Array of days',
        type: 'string[]',
        default: '["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]',
      },
      {
        property: '[months]',
        description: 'Array of months',
        type: 'string[]',
        default: "['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']",
      },
      {
        property: '[startYear]',
        description: 'Start year of the calendar',
        type: 'number',
        default: '1900',
      },
      {
        property: '[endYear]',
        description: 'End year of the calendar',
        type: 'number',
        default: '2100',
      },
      {
        property: '[todayButton]',
        description: 'Show today button',
        type: 'boolean',
        default: 'true',
      },
      {
        property: '[todayLabel]',
        description: 'Label of the today button',
        type: 'string',
        default: 'Today',
      },
      {
        property: '(rangeChange)',
        description: 'Event emitted when the range changes',
        type: 'EventEmitter<RangeDate>',
        default: '-',
      }
    ];
  }
}
