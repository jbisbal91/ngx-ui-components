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
@Component({
  selector: 'ngx-option',
  templateUrl: './ngx-option.component.html',
  styleUrls: ['./ngx-option.component.scss'],
  standalone: true,
  host: {
    class: 'ngx-option',
  },
})
export class NgxOptionComponent implements Option, AfterViewInit {
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) selected: boolean = false;
  @Input() value: string | number = '';
  @Output() onSelect: EventEmitter<Option> = new EventEmitter<Option>();
  public content: string | number = '';

  @ViewChild('content') contentRef!: ElementRef;

  selectedOption() {
    this.onSelect.emit({
      disabled: this.disabled,
      selected: this.selected,
      value: this.value,
      content: this.content,
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.content = this.contentRef?.nativeElement.textContent.trim();
      console.log('Valor del contenido:', this.content);
    });
    this.contentRef.nativeElement.addEventListener('click', this.selectedOption.bind(this));
  }
}
