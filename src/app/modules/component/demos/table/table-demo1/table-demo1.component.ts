import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TableDemo1Service } from './service/table-demo1.service';

@Component({
  selector: 'app-table-demo1',
  templateUrl: './table-demo1.component.html',
  styleUrls: ['./table-demo1.component.scss'],
})
export class TableDemo1Component {
  displayedColumns: any[] = [
    'Full Name',
    'Job Title',
    'Country',
    'Status',
    'Satisfaction',
    'Productivity',
    'Salary',
    'Phone',
    'Email',
    'Address',
    'LinkedIn',
    'Twitter',
    'Instagram',
  ];
  
  ngxBordered: boolean = true;

  getColor(value: number): string {
    if (value <= 50) {
      return '#FF4D4F';
    } else if (value <= 80) {
      return '#1890FF';
    } else if (value <= 100) {
      return '#52C41A';
    } else {
      throw new Error('Valor fuera de rango');
    }
  }

  values: Observable<any[]> = this.tableDemo1Service.getValues();

  constructor(private tableDemo1Service: TableDemo1Service) {}
}
