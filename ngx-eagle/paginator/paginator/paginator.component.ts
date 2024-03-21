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

  ngOnInit(): void {
    if (!this.pageSize) {
      this.pageSize = this.pageSizeOptions[0];
    }
    this.pageSizeLabel =
      this.elementRef?.nativeElement.attributes['page-size-label']?.value;
    this.pageStatus = {
      previousPageIndex: 0,
      currentPageIndex: 0,
      pageSize: this.pageSize,
      length: length,
    };
    console.log(this.pageStatus);
  }

  onChangeValue(value: number) {
    this.pageSize = value;
  }
}
