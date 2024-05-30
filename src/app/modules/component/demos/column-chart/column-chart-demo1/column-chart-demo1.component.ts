import { Component } from '@angular/core';

@Component({
  selector: 'app-column-chart-demo1',
  templateUrl: './column-chart-demo1.component.html',
  styleUrls: ['./column-chart-demo1.component.scss']
})
export class ColumnChartDemo1Component {
  yValue =
  [
    { label: '', value: 0 },
    { label: '$ 200,000', value: 20 },
    { label: '$ 400,000', value: 40 },
    { label: '$ 600,000', value: 60 },
    { label: '$ 800,000', value: 80 },
    { label: '$ 10,000,000', value: 100 }];
    
value: any[] = [
  { label: 'Americas', value: 69, color: '#343399' },
  { label: 'Asia Pacific', value: 54, color: '#CD9933' },
  { label: 'Central Europe', value: 30, color: '#993233' },
  { label: 'Northern Europe', value: 96, color: '#CDCC00' },
  { label: 'Southern Europe', value: 80, color: '#346633' },
];
}
