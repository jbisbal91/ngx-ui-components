import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialog-docs',
  templateUrl: './dialog-docs.component.html',
  styleUrls: ['./dialog-docs.component.scss']
})
export class DialogDocsComponent implements OnInit {
  variation1DemoTabs!: Tabs[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.variation1DemoTabs = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get('assets/demos/dialog-demos/dialog-demo1/dialog-demo1.component.html', { responseType: 'text' })        
        }
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get('assets/demos/dialog-demos/dialog-demo1/dialog-demo1.component.ts', { responseType: 'text' })
        }
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get('assets/demos/dialog-demos/dialog-demo1/dialog-demo1.component.scss', { responseType: 'text' })
        }
      }
    ];
  }
}
