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
  @Input({ transform: numberAttribute }) pageSize?: number;
  @Input({ transform: booleanAttribute }) hidePageSize: boolean = false;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) showExtremeButtons: boolean = false;

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  pageSizeLabel?: string;

  pageStatus!: PageEvent;

  constructor(public elementRef: ElementRef) {}

  onChangeValue(value: number) {
    this.pageSize = value;
  }

  ngOnInit(): void {
    this.pageSizeLabel =
      this.elementRef?.nativeElement.attributes['page-size-label']?.value;
    this.initPageStatus();
  }

  initPageStatus() {
    if (!this.pageSize) {
      this.pageSize = this.pageSizeOptions[0];
    }
    this.pageStatus = {
      previousPageIndex: 0,
      currentPageIndex: 0,
      pageSize: this.pageSize,
      length: length,
    };
  }

  onFirst() {}

  onLast() {}

  onPrevious() {}

  onNext() {}
}
