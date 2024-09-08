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
        property: '(signatureComplete)',
        description:'Event emitted when the signature is completed',
        type: 'EventEmitter<string>',
        default: '-',
      },
    ];
  }
}
