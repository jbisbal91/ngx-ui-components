import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'ngx-tag',
  templateUrl: './tag.component.html',
  host: {
    class: 'ngx-tag',
    '[style.background-color]': 'ngxColor',
    '[class.ngx-tag-has-color]': 'ngxColor? true : false',
    '[class.ngx-tag-checkable]': `ngxMode === 'checkable'`,
    '[class.ngx-tag-sync]': `ngxMode === 'sync'`,
    '[class.ngx-tag-checkable-checked]': `ngxChecked`,
    '(click)': 'updateCheckedStatus()'
  },
})
export class TagComponent {
  @Input() ngxMode: 'default' | 'closeable' | 'checkable' | 'sync' = 'default';
  @Input() ngxColor?: string;

  @Input() ngxChecked = false;

  @Output() readonly ngxOnClose = new EventEmitter<MouseEvent>();
  @Output() readonly ngxCheckedChange = new EventEmitter<boolean>();

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  updateCheckedStatus(): void {
    if (this.ngxMode === 'checkable') {
      this.ngxChecked = !this.ngxChecked;
      this.ngxCheckedChange.emit(this.ngxChecked);
    }
  }

  closeTag(e: MouseEvent): void {
    this.ngxOnClose.emit(e);
    if (!e.defaultPrevented) {
      this.renderer.removeChild(
        this.renderer.parentNode(this.elementRef.nativeElement),
        this.elementRef.nativeElement
      );
    }
  }
}
