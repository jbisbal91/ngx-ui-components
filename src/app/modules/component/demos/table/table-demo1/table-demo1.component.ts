import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-table-demo1',
  templateUrl: './table-demo1.component.html',
  styleUrls: ['./table-demo1.component.scss'],
})
export class TableDemo1Component {
  displayedColumns: any[] = ['Col1', 'Col2', 'Col3', 'Col4', 'Col5'];

  values(): Observable<any[]> {
    const values: any[] = [];
    for (let i = 0; i <= 200; ++i) {
      values.push({
        col1: 'col1',
        col2: 'col2',
        col3: 'col3',
        col4: 'col4',
        col5: 'col5',
      });
    }
    return of(values);
  }
}
