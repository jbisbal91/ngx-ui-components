import { Component } from '@angular/core';
import { NgxPaginatorIntl } from 'ngx-eagle/paginator';
import { PageEvent } from 'ngx-eagle/paginator/typings';

@Component({
  selector: 'app-paginator-demo1',
  templateUrl: './paginator-demo1.component.html',
  styleUrls: ['./paginator-demo1.component.scss'],
})
export class PaginatorDemo1Component {

  constructor(public paginatorIntl: NgxPaginatorIntl) {
    //paginatorIntl.itemsPerPageLabel = '';
  }

  handlePageEvent(e: PageEvent) {
    console.log(e);
  }
}
