import { Component } from '@angular/core';
import { NgxPaginatorIntl, PageEvent } from 'ngx-eagle/paginator';

@Component({
  selector: 'app-paginator-demo2',
  templateUrl: './paginator-demo2.component.html',
  styleUrls: ['./paginator-demo2.component.scss']
})
export class PaginatorDemo2Component {
  length: number = 50;
  pageSize: number = 10;
  hidePageSize: boolean = false;
  showExtremeButtons: boolean = true;
  pageEvent!: PageEvent;
  constructor(public paginatorIntl: NgxPaginatorIntl) {
    //paginatorIntl.itemsPerPageLabel = '';
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.pageEvent = pageEvent;
  }

}
