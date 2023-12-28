import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid-docs',
  templateUrl: './grid-docs.component.html',
  styleUrls: ['./grid-docs.component.scss']
})
export class GridDocsComponent implements OnInit{
  variation1DemoGrid!: Tabs[];

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.variation1DemoGrid = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get('assets/demos/grid/grid-demo1/grid-demo1.component.html', { responseType: 'text' })        
        }
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get('assets/demos/grid/grid-demo1/grid-demo1.component.ts', { responseType: 'text' })
        }
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get('assets/demos/grid/grid-demo1/grid-demo1.component.scss', { responseType: 'text' })
        }
      }
    ];
  }
}
