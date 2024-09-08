import { Component } from '@angular/core';
import { Property } from '../../interfaces/property.interface';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signature-docs',
  templateUrl: './signature-docs.component.html'
})
export class SignatureDocsComponent {
  moduleImport = "import { SignatureModule } from 'ngx-eagle/signature';";
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiessignature: Property[] = [];
  variation1DemoSignature!: Tabs[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoSignature = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/signature/signature-demo1/signature-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/signature/signature-demo1/signature-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/signature/signature-demo1/signature-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiessignature = [      
      {
        property: '[ngxAllowClear]',
        description: 'Whether to allow clear when click again',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[ngxColor]',
        description: 'The color of the star',
        type: 'string',
        default: '#FFA600',
      },
      {
        property: '[ngModel]',
        description:
          'Current value , double binding',
        type: 'number',
        default: '-',
      },
      {
        property: '(ngModelChange)',
        description:
          'Callback when select value',
        type: 'EventEmitter<boolean>',
        default: '-',
      },
    ];
  }
}
