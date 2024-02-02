import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-table-demo1',
  templateUrl: './table-demo1.component.html',
  styleUrls: ['./table-demo1.component.scss'],
})
export class TableDemo1Component {
  displayedColumns: any[] = ['Col1', 'Col2', 'Col3', 'Col4', 'Col5'];
  ngxBordered: boolean = false;
  values(): Observable<any[]> {
    const values: any[] = [];
    for (let i = 1; i <= 50; ++i) {
      values.push({
        col1: `row${i} - col1`,
        col2: `row${i} - col2`,
        col3: `row${i} - col3`,
        col4: `row${i} - col4`,
        col5: `row${i} - col5`,
      });
    }
    return of(values);
  }
}
