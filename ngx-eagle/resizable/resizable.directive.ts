import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, numberAttribute, Output, Renderer2, SimpleChanges, OnChanges } from '@angular/core';

const RESIZE_HANDLE_WIDTH = '5px';
const RESIZE_HANDLE_COLOR = 'transparent';
const RESIZE_HANDLE_ZINDEX = '1';

@Directive({
  selector: '[ngx-resizable]',
  standalone: true
})
export class ResizableDirective implements AfterViewInit, OnChanges {

  @Input({transform:numberAttribute}) resizableWidth: number = 0;
  @Input({transform:numberAttribute}) minWidth: number = 100;
  @Input() markerPosition: 'right' | 'left' = 'right';
  
  @Output() resizableWidthChange = new EventEmitter<number>();

  private isResizing = false;
  private startX = 0;
  private initialWidth = 0;

  private resizeListener!: () => void;
  private endResizeListener!: () => void;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.createResizeMarker();
    this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'auto');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', 'width 0.1s ease-out'); // Smooth transition
    this.updateResizableWidth();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resizableWidth']) {
      this.updateResizableWidth();
    }
    if (changes['markerPosition']) {
      this.updateResizeMarkerPosition();
    }
  }

  private createResizeMarker() {
    const marker = this.renderer.createElement('div');
    this.updateResizeMarkerPosition(marker);
    this.renderer.setStyle(marker, 'cursor', 'ew-resize');
    this.renderer.setStyle(marker, 'position', 'absolute');
    this.renderer.setStyle(marker, 'top', '0');
    this.renderer.setStyle(marker, 'bottom', '0');
    this.renderer.setStyle(marker, 'width', RESIZE_HANDLE_WIDTH);
    this.renderer.setStyle(marker, 'background-color', RESIZE_HANDLE_COLOR);
    this.renderer.setStyle(marker, 'z-index', RESIZE_HANDLE_ZINDEX);
    this.renderer.setStyle(marker, 'user-select', 'none');

    this.renderer.listen(marker, 'mousedown', (event: MouseEvent) => this.onDragStart(event));

    this.renderer.appendChild(this.elementRef.nativeElement, marker);
  }

  private updateResizeMarkerPosition(marker?: HTMLElement) {
    const positionStyles = {
      right: '0',
      left: '0'
    };

    if (marker) {
      this.renderer.setStyle(marker, this.markerPosition, positionStyles[this.markerPosition]);
    } else {
      const markers = this.elementRef.nativeElement.querySelectorAll('div');
      if (markers.length > 0) {
        this.renderer.setStyle(markers[0], this.markerPosition, positionStyles[this.markerPosition]);
      }
    }
  }

  private onDragStart(event: MouseEvent) {
    if (event.button === 0) { // Left mouse button
      this.isResizing = true;
      this.startX = event.clientX;
      this.initialWidth = this.elementRef.nativeElement.clientWidth;
      event.preventDefault();

      // Attach mousemove and mouseup event listeners to the document
      this.resizeListener = this.renderer.listen('document', 'mousemove', this.onMouseMove.bind(this));
      this.endResizeListener = this.renderer.listen('document', 'mouseup', this.onMouseUp.bind(this));
    }
  }

  private onMouseMove(event: MouseEvent) {
    if (this.isResizing) {
      const newWidth = Math.max(this.initialWidth + (event.clientX - this.startX), this.minWidth);

      // Use requestAnimationFrame to improve performance
      requestAnimationFrame(() => this.setPanelWidth(newWidth));

      event.preventDefault();
    }
  }

  private onMouseUp() {
    if (this.isResizing) {
      this.isResizing = false;

      // Remove the mousemove and mouseup event listeners from the document
      if (this.resizeListener) this.resizeListener();
      if (this.endResizeListener) this.endResizeListener();

      // Emit the final width value
      const finalWidth = this.elementRef.nativeElement.clientWidth;
      this.resizableWidthChange.emit(finalWidth);
    }
  }

  private setPanelWidth(newWidth: number) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${newWidth}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', `${newWidth}px`);
    this.resizableWidth = newWidth; // Update the input property to reflect the current width
  }

  private updateResizableWidth() {
    if (this.resizableWidth > 0) {
      this.setPanelWidth(this.resizableWidth);
    }
  }
}
