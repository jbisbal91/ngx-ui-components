import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';
import { SelectModule } from 'ngx-eagle/select';
import { PageEvent } from '../typings';
import { NgxPaginatorIntl } from '../paginator-intl.service';

@Component({
  selector: 'ngx-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  standalone: true,
  imports: [SelectModule, NgFor, NgIf],
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() pageSizeOptions: number[] = [];
  @Input({ transform: numberAttribute }) length: number = 0;
  @Input({ transform: numberAttribute }) pageSize: number = 0;
  @Input({ transform: booleanAttribute }) hidePageSize: boolean = false;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) showExtremeButtons: boolean = false;
  @Input() pageStatus!: PageEvent;

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  constructor(
    public elementRef: ElementRef,
    public paginatorIntl: NgxPaginatorIntl
  ) {}

  onChangeValue(pageSize: number) {
    const startIndex = this.pageStatus.currentPageIndex * this.pageSize;
    this.pageStatus.currentPageIndex = Math.floor(startIndex / pageSize) || 0;
    this.pageSize = pageSize;
    this.pageStatus.pageSize = this.pageSize;
    this.page.emit(this.pageStatus);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.hasOwnProperty('length') ||
      changes.hasOwnProperty('pageSize')
    ) {
      this.pageStatus.length = this.length | 0;
      this.pageStatus.pageSize = this.pageSize | 0;
      this.onChangeValue(this.pageStatus.pageSize);
    }
  }

  ngOnInit(): void {
    this.initPageStatus();
  }

  initPageStatus() {
    this.pageStatus = {
      previousPageIndex: 0,
      currentPageIndex: 0,
      pageSize: this.pageSize,
      length: this.length,
    };
  }

  onFirst() {
    this.setPreviousIndex();
    if (this.disabledPrevious()) {
      this.pageStatus.currentPageIndex = 0;
      this.page.emit(this.pageStatus);
    }
  }

  onPrevious() {
    this.setPreviousIndex();
    if (this.disabledPrevious()) {
      --this.pageStatus.currentPageIndex;
      this.page.emit(this.pageStatus);
    }
  }

  onNext() {
    this.setPreviousIndex();
    if (this.disabledNex()) {
      ++this.pageStatus.currentPageIndex;
      this.page.emit(this.pageStatus);
    }
  }

  onLast() {
    this.setPreviousIndex();
    if (this.disabledNex()) {
      this.pageStatus.currentPageIndex =
        (this.length - this.pageSize) / this.pageSize;
      this.page.emit(this.pageStatus);
    }
  }

  disabledPrevious = () => {
    return this.pageStatus.currentPageIndex * this.pageStatus.pageSize > 0;
  };

  disabledNex = () => {
    return (
      this.pageStatus.currentPageIndex * this.pageSize <
      this.length - this.pageSize
    );
  };

  setPreviousIndex() {
    this.pageStatus.previousPageIndex = this.pageStatus.currentPageIndex;
  }
}
