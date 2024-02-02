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
    'Phone',
    'Email',
    'Address',
    'LinkedIn',
    'Twitter',
    'Instagram',
  ];
  ngxBordered: boolean = true;

  values: Observable<any[]> = this.tableDemo1Service.getValues();

  constructor(private tableDemo1Service: TableDemo1Service) {}
}
