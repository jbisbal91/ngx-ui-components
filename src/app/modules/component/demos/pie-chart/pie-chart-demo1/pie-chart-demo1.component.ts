import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart-demo1',
  templateUrl: './pie-chart-demo1.component.html',
  styleUrls: ['./pie-chart-demo1.component.scss'],
})
export class PieChartDemo1Component {
  values2: any = [
    { label: 'Transporte', value: 11, color: '#E31A1C' },
    { label: 'Suministro de electricidad', value: 26, color: '#FB9A99' },
    { label: 'Pesca', value: 11, color: '#33A02C' },
    { label: 'Comercio', value: 10, color: '#B2DF8A' },
    { label: 'Alojamiento', value: 19, color: '#1F78B4' },
    { label: 'Agricultura', value: 22, color: '#A6CEE3' },
  ];

  values: any = [
    { label: 'Google', value: 40, color: '#F44336' },
    { label: 'Facebook', value: 20, color: '#FF9E43' },
    { label: 'Others', value: 15, color: '#7467EF' },
  ];

  values3: any = [
    { label: 'Google', value: 40, color: '#F44336' },
    { label: 'Facebook', value: 20, color: '#FF9E43' },
    { label: 'Others', value: 15, color: '#7467EF' },
    { label: 'Google', value: 40, color: '#F44336' },
    { label: 'Facebook', value: 20, color: '#FF9E43' },
    { label: 'Others', value: 15, color: '#7467EF' },
    { label: 'Google', value: 40, color: '#F44336' },
    { label: 'Facebook', value: 20, color: '#FF9E43' },
    { label: 'Others', value: 15, color: '#7467EF' },
  ];
}