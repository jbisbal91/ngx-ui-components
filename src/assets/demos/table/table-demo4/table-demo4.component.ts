import { Component, OnInit } from '@angular/core';
import { TableDemo1Service } from '../service/table-demo1.service';
import { SortService } from 'src/app/shared/services/sort/sort.service';
import { PageEvent } from 'ngx-eagle/paginator';

@Component({
  selector: 'app-table-demo4',
  templateUrl: './table-demo4.component.html',
  styleUrls: ['./table-demo4.component.scss'],
})
export class TableDemo4Component implements OnInit {
  startPageIndex = 0;
  endPageIndex = 5;

  displayedColumns: any[] = [
    { prop: 'Full Name', value: 'full_name' },
    { prop: 'Job Title', value: 'job_title' },
    { prop: 'Country', value: 'country' },
    { prop: 'Status', value: 'status' },
    { prop: 'Satisfaction', value: 'satisfaction' },
    { prop: 'Productivity', value: 'productivity' },
    { prop: 'Salary', value: 'salary' },
    { prop: 'Phone', value: 'phone' },
    { prop: 'Email', value: 'email' },
    { prop: 'Address', value: 'address' },
    { prop: 'LinkedIn', value: 'linkedIn' },
    { prop: 'Twitter', value: 'twitter' },
    { prop: 'Instagram', value: 'instagram' },
  ];

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
  values!: any[];
  allValues!: any[];

  constructor(
    private tableDemo1Service: TableDemo1Service,
    private sortService: SortService
  ) {}

  ngOnInit() {
    this.tableDemo1Service.getValues().subscribe((data: any[]) => {
      this.values = data.slice(this.startPageIndex, this.endPageIndex);
      this.allValues = data.slice();
    });
  }

  sorting(sort: any, col: string) {
    if (sort === 'ascend') {
      this.values = this.sortService.sort(this.values, col);
    }
    if (sort === 'descend') {
      this.values = this.sortService.sort(this.values, col, true);
    }
    if (sort === null) {
      this.values = this.allValues.slice();
      this.values = this.values.slice(this.startPageIndex, this.endPageIndex);
    }
  }

  handlePageEvent(pe: PageEvent) {
    this.startPageIndex = pe.currentPageIndex * pe.pageSize;
    this.endPageIndex = pe.currentPageIndex * pe.pageSize + pe.pageSize;
    this.values = this.allValues.slice(this.startPageIndex, this.endPageIndex);
  }
}
