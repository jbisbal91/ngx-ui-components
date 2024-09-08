import { Component } from '@angular/core';

interface Person {
  name: string;
  age: number;
  address: string;
  email: string;
}

@Component({
  selector: 'app-table-demo1',
  templateUrl: './table-demo1.component.html',
  styleUrls: ['./table-demo1.component.scss'],
})
export class TableDemo1Component {
  displayedColumns: any[] = [
    { prop: 'Name', value: 'name' },
    { prop: 'Age', value: 'age' },
    { prop: 'Email', value: 'email' },
    { prop: 'Address', value: 'address' },
  ];

  listOfData: Person[] = [
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
}
