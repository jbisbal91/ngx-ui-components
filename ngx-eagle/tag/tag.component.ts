import { NgIf, NgStyle } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  booleanAttribute,
} from '@angular/core';
import { NgxMode } from './typings';
import { ColorConverter } from 'ngx-eagle/core/services';

@Component({
  selector: 'ngx-tag',
  template: `
    <ng-content></ng-content>
    <svg
      class="ngx-tag-close"
      *ngIf="ngxMode === 'closeable'"
      (click)="closeTag($event)"
      xmlns="http://www.w3.org/2000/svg"
      height="14"
      viewBox="0 -960 960 960"
      width="14"
      fill="currentColor"
    >
      <path
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
  `,
  host: {
    class: 'ngx-tag',
    '[class.ngx-tag-checkable]': `ngxMode === 'checkable'`,
    '(click)': 'updateCheckedStatus()',
  },
  standalone: true,
  imports: [NgStyle, NgIf],
})
export class TagComponent implements OnInit, OnChanges {
  @Input() ngxMode: NgxMode = 'default';
  @Input() ngxColor!: string;
  @Input({ transform: booleanAttribute }) ngxChecked: boolean = false;
  @Input({ transform: booleanAttribute }) ngxBordered: boolean = true;

  @Output() readonly ngxOnClose = new EventEmitter<MouseEvent>();
  @Output() readonly ngxCheckedChange = new EventEmitter<boolean>();

  backgroundColor: string = '#1890FF';
  color: string = '#ffffff';

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private colorConverter: ColorConverter
  ) {}

  ngOnInit(): void {
    this.setTagColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxColor'] && changes['ngxColor'].currentValue) {
      const { backgroundColor, overlayColor } =
        this.colorConverter.contrastingColors(this.ngxColor);
      this.backgroundColor = backgroundColor;
      this.color = overlayColor;
      this.setTagColor();
    }
  }

  updateCheckedStatus(): void {
    if (this.ngxMode === 'checkable') {
      this.ngxChecked = !this.ngxChecked;
      this.setTagColor();
      this.ngxCheckedChange.emit(this.ngxChecked);
    }
  }

  setTagColor() {
    let bgColor = '';
    let color = '';
    let borderColor = '';
    switch (this.ngxMode) {
      case 'default':
        bgColor = this.backgroundColor;
        color = this.color;
        break;
      case 'checkable':
        bgColor = this.ngxChecked ? this.backgroundColor : 'transparent';
        color = this.ngxChecked ? this.color : 'currentColor';
        break;
      case 'closeable':
        bgColor = this.backgroundColor;
        color = this.color;
        break;
    }
    borderColor = this.color === '#ffffff' ? 'currentColor' : this.color;
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      bgColor
    );
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-color',
      this.ngxBordered ? borderColor : 'transparent'
    );
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
