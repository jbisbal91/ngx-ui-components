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
  @Input({ transform: booleanAttribute }) showFirstLastButtons: boolean = false;

  @Output() page: EventEmitter<any> = new EventEmitter<any>();

  pageSizeLabel?: string;

  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {
    if (!this.pageSize) {
      this.pageSize = this.pageSizeOptions[0];
    }
    this.pageSizeLabel =
      this.elementRef?.nativeElement.attributes['page-size-label']?.value;
  }

  onChangeValue(value: number) {
    this.pageSize = value;
  }
}
