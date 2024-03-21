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

  constructor(public elementRef: ElementRef) {}

  onChangeValue(value: number) {
    this.pageSize = value;
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

  onFirst() {}

  onPrevious() {
    this.pageStatus.previousPageIndex = this.pageStatus.currentPageIndex;
    if (this.disabledPrevious()) {
      --this.pageStatus.currentPageIndex;
      this.page.emit(this.pageStatus);
    }
  }

  onNext() {
    this.pageStatus.previousPageIndex = this.pageStatus.currentPageIndex;
    if (this.disabledNex()) {
      ++this.pageStatus.currentPageIndex;
      this.page.emit(this.pageStatus);
    }
  }

  onLast() {}

  disabledPrevious = () => {
    return this.pageStatus.currentPageIndex * this.pageStatus.pageSize > 0;
  };

  disabledNex = () => {
    return (
      this.pageStatus.currentPageIndex * this.pageSize <
      this.length - this.pageSize
    );
  };
}
