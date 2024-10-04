import { Component, OnInit, Renderer2 } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-dialog-docs',
  templateUrl: './dialog-docs.component.html',
})
export class DialogDocsComponent implements OnInit {
  moduleImport = "import { NgxDialog } from 'ngx-eagle/dialog';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesDialog: Property[] = [];
  propertiesMethods: Property[] = [];
  variation1DemoDialog!: Tabs[];
  variation2DemoDialog!: Tabs[];
  variation3DemoDialog!: Tabs[];
  variation4DemoDialog!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoDialog = [
      {
        tabTitle: 'DialogDemo1Component',
        tabContent: {
          code: this.http.get(
            'assets/demos/dialog/dialog-demo1/dialog-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'DialogRef1Component',
        tabContent: {
          code: this.http.get(
            'assets/demos/dialog/dialog-demo1/dialog-ref1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoDialog = [
      {
        tabTitle: 'DialogDemo2Component',
        tabContent: {
          code: this.http.get(
            'assets/demos/dialog/dialog-demo2/dialog-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'DialogRef2Component',
        tabContent: {
          code: this.http.get(
            'assets/demos/dialog/dialog-demo2/dialog-ref2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoDialog = [
      {
        tabTitle: 'DialogDemo3Component',
        tabContent: {
          code: this.http.get(
            'assets/demos/dialog/dialog-demo3/dialog-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
    ];
  this.variation4DemoDialog = [
      {
        tabTitle: 'DialogDemo4Component',
        tabContent: {
          code: this.http.get(
            'assets/demos/dialog/dialog-demo4/dialog-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesDialog = [
      {
        property: 'open',
        description: 'Opens a modal dialog containing the given component',
        type: 'DialogRef',
        default: '-',
      },
      {
        property: 'closeAll',
        description: 'Closes all of the currently-open dialogs.',
        type: 'void',
        default: '-',
      }
    ]

    this.propertiesMethods = [
      {
        property: 'afterClosed$',
        description: 'It is emitted after closing the modal.',
        type: 'Observable<any>',
        default: '-',
      },
      {
        property: 'backdropClick$',
        description: 'Emitted after clicking on the modal backdrop.',
        type: 'Observable<MouseEvent>',
        default: '-',
      },
      {
        property: 'resetDrag',
        description:
          ' A method that can be called to reset the dragged modal to the middle of the screen. An offset can be given as the first parameter to position it different from the center',
        type: 'void',
        default: '-',
      },
      {
        property: 'beforeClose',
        description: 'Indicates whether the modal can be closed.',
        type: "'Observable<boolean>' | 'Promise<boolean>' | 'boolean'",
        default: '-',
      },
    ];
  }
}
