import { Component, OnInit } from '@angular/core';
import { SortService } from 'src/app/shared/services/sort/sort.service';

@Component({
  selector: 'app-table-demo2',
  templateUrl: './table-demo2.component.html',
  styleUrls: ['./table-demo2.component.scss'],
})
export class TableDemo2Component implements OnInit {
  displayedColumns: any[] = [
    { prop: 'Name', value: 'name' },
    { prop: 'Age', value: 'age' },
    { prop: 'Email', value: 'email' },
    { prop: 'Address', value: 'address' },
  ];

  listOfData: any[] = [];
  listAllData: any[] = [];

  constructor(private sortService: SortService) {}

  ngOnInit(): void {
    this.listOfData = [
      {
        name: 'Emily Thompson',
        age: 32,
        address: '101 Pine St, City, Province',
        email: 'emily.thompson@example.com',
      },
      {
        name: 'Robert Davis ',
        age: 30,
        address: '456 Elm St, City, State',
        email: 'robert.davis@example.com',
      },
      {
        name: 'Carlos Rodriguez ',
        age: 30,
        address: 'Av. Reforma 123, Ciudad de México',
        email: 'carlos.rodriguez@example.com',
      },
      {
        name: 'Emma Watson',
        age: 33,
        address: 'Abbey Road 123, Liverpool',
        email: 'emma.watson@example.com',
      },
    ];
    this.listAllData = this.listOfData.slice();
  }

  sorting(sort: any, col: string) {
    if (sort === 'ascend') {
      this.listOfData = this.sortService.sort(this.listOfData, col);
    }
    if (sort === 'descend') {
      this.listOfData = this.sortService.sort(this.listOfData, col, true);
    }
    if (sort === null) {
      this.listOfData = this.listAllData.slice();
    }
  }
}
