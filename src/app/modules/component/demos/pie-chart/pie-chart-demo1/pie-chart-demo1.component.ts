import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart-demo1',
  templateUrl: './pie-chart-demo1.component.html',
  styleUrls: ['./pie-chart-demo1.component.scss'],
})
export class PieChartDemo1Component {
  values: any = [
    { label: 'Google', value: 40, color: '#F44336' },
    { label: 'Facebook', value: 20, color: '#FF9E43' },
    { label: 'Others', value: 15, color: '#7467EF' },
  ];
}
