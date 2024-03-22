import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PageEvent } from './typings';

@Injectable({
  providedIn: 'root'
})
export class NgxPaginatorIntl{

  readonly changes: Subject<void> = new Subject<void>();

  itemsPerPageLabel: string = 'Items per page:';

  constructor() { }

  getRangeLabel(pageStatus: PageEvent) {
    return ` ${pageStatus.currentPageIndex * pageStatus.pageSize + 1} - ${
      pageStatus.currentPageIndex * pageStatus.pageSize + pageStatus.pageSize
    } of ${pageStatus.length}`;
  }
}
