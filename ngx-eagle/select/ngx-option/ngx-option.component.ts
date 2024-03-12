import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import { Option } from './ngx-option.interface';
import { NgIf } from '@angular/common';
@Component({
  selector: 'ngx-option',
  templateUrl: './ngx-option.component.html',
  styleUrls: ['./ngx-option.component.scss'],
  standalone: true,
  host: {
    class: 'ngx-option',
  },
  imports: [NgIf],
})
export class NgxOptionComponent implements Option, AfterViewInit {
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) selected: boolean = false;
  @Input() value: any = '';
  @Output() onSelect: EventEmitter<Option> = new EventEmitter<Option>();
  public label: any = '';

  isVisible: boolean = true;

  @ViewChild('content') contentRef!: ElementRef;

  selectedOption() {
    if (!this.disabled) {
      this.isVisible = true;
      this.onSelect.emit({
        disabled: this.disabled,
        selected: this.selected,
        value: this.value,
        label: this.label,
      });
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.label = this.contentRef?.nativeElement.textContent.trim();
    });
  }
}
