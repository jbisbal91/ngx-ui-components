import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';
import { SelectModule } from 'ngx-eagle/select';
import { PageEvent } from '../typings';

@Component({
  selector: 'ngx-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  standalone: true,
  imports: [SelectModule, NgFor, NgIf],
})
export class PaginatorComponent implements OnInit {
  @Input() pageSizeOptions: number[] = [];
  @Input({ transform: numberAttribute }) length!: number;
  @Input({ transform: numberAttribute }) pageSize!: number;
  @Input({ transform: booleanAttribute }) hidePageSize: boolean = false;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) showExtremeButtons: boolean = false;

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  pageSizeLabel?: string;

  pageStatus!: PageEvent;
  currentPageNavigation: string = 'next';

  constructor(public elementRef: ElementRef) {}

  onChangeValue(pageSize: number) {
    const startIndex = this.pageStatus.currentPageIndex * this.pageSize;
    this.pageStatus.currentPageIndex = Math.floor(startIndex / pageSize) || 0;
    this.pageSize = pageSize;
    this.pageStatus.pageSize = this.pageSize;
    this.page.emit(this.pageStatus);
  }

  ngOnInit(): void {
    this.pageSizeLabel =
      this.elementRef?.nativeElement.attributes['page-size-label']?.value;
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
    this.currentPageNavigation = 'first';
    this.setPreviousIndex();
    if (this.disabledPrevious()) {
      this.pageStatus.currentPageIndex = 0;
      this.page.emit(this.pageStatus);
    }
  }

  onPrevious() {
    this.currentPageNavigation = 'previous';
    this.setPreviousIndex();
    if (this.disabledPrevious()) {
      --this.pageStatus.currentPageIndex;
      this.page.emit(this.pageStatus);
    }
  }

  onNext() {
    this.currentPageNavigation = 'next';
    this.setPreviousIndex();
    if (this.disabledNex()) {
      ++this.pageStatus.currentPageIndex;
      this.page.emit(this.pageStatus);
    }
  }

  onLast() {
    this.currentPageNavigation = 'last';
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

  rangeValue() {
    return ` ${
      this.pageStatus.currentPageIndex * this.pageStatus.pageSize + 1
    } - ${
      this.pageStatus.currentPageIndex * this.pageStatus.pageSize +
      this.pageStatus.pageSize
    } of ${this.length}`;
  }
}
