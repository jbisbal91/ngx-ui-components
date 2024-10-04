import { Component } from '@angular/core';
import { NgxPaginatorIntl, PageEvent } from 'ngx-eagle/paginator';

@Component({
  selector: 'app-paginator-demo1',
  templateUrl: './paginator-demo1.component.html',
  styleUrls: ['./paginator-demo1.component.scss'],
})
export class PaginatorDemo1Component {
  handlePageEvent(e: PageEvent) {
    console.log(e);
  }
}
