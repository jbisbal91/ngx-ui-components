import { NgIf, NgStyle } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';

export type ngxMode = 'default' | 'closeable' | 'checkable' | 'sync';

@Component({
  selector: 'ngx-tag',
  template: `
    <svg
      *ngIf="ngxMode === 'sync'"
      style="
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(113deg)
      brightness(110%) contrast(109%);
  "
      class="ngx-tag-icon-sync"
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z"
      />
    </svg>

    <ng-content></ng-content>

    <svg
      [ngStyle]="{
        filter: ngxColor
          ? 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(113deg) brightness(110%) contrast(109%)'
          : ''
      }"
      class="ngx-tag-close"
      *ngIf="ngxMode === 'closeable'"
      (click)="closeTag($event)"
      xmlns="http://www.w3.org/2000/svg"
      height="14"
      viewBox="0 -960 960 960"
      width="14"
    >
      <path
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
  `,
  host: {
    class: 'ngx-tag',
    '[style.background-color]': 'ngxColor',
    '[class.ngx-tag-has-color]': 'ngxColor? true : false',
    '[class.ngx-tag-checkable]': `ngxMode === 'checkable'`,
    '[class.ngx-tag-sync]': `ngxMode === 'sync'`,
    '[class.ngx-tag-checkable-checked]': `ngxChecked`,
    '(click)': 'updateCheckedStatus()',
  },
  standalone: true,
  imports: [NgStyle, NgIf],
})
export class TagComponent {
  @Input() ngxMode: ngxMode = 'default';
  @Input() ngxColor?: string;
  @Input() ngxChecked: boolean = false;

  @Output() readonly ngxOnClose = new EventEmitter<MouseEvent>();
  @Output() readonly ngxCheckedChange = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

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
