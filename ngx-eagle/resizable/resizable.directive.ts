import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { MarkerPosition, ResizeDirection } from './typings';

const RESIZE_HANDLE_WIDTH = '5px';
const RESIZE_HANDLE_COLOR = 'transparent';
const RESIZE_HANDLE_ZINDEX = '1';


@Directive({
  selector: '[ngx-resizable]',
  standalone: true
})
export class ResizableDirective implements AfterViewInit, OnChanges {

  @Input() resizableWidth: number = 0;
  @Input() minWidth: number = 100;
  @Input() minHeight: number = 100;

  @Input() markerPosition: MarkerPosition = 'bottom-right';
  @Input() resizeDirection: ResizeDirection = 'diagonal';
  @Output() onResize = new EventEmitter<{ width: number, height: number }>();

  private isResizing = false;
  private startX = 0;
  private startY = 0;
  private initialWidth = 0;
  private initialHeight = 0;

  private resizeListener!: () => void;
  private endResizeListener!: () => void;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.createResizeMarker();
    this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'auto');
    this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'relative'); // Ensure the element is positioned relatively
    this.updateResizableDimensions();
    this.updateResizeMarkerPosition();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resizableWidth'] || changes['minHeight']) {
      this.updateResizableDimensions();
    }
    if (changes['markerPosition'] || changes['resizeDirection']) {
      this.updateResizeMarkerPosition();
    }
  }

  private createResizeMarker() {
    const marker = this.renderer.createElement('div');
    this.renderer.setStyle(marker, 'position', 'absolute');
    this.renderer.setStyle(marker, 'background-color', RESIZE_HANDLE_COLOR);
    this.renderer.setStyle(marker, 'z-index', RESIZE_HANDLE_ZINDEX);
    this.renderer.setStyle(marker, 'cursor', this.getCursorForDirection());
    this.renderer.setStyle(marker, 'user-select', 'none');
    this.renderer.setStyle(marker, 'box-sizing', 'border-box');

    if (this.resizeDirection === 'horizontal') {
      this.renderer.setStyle(marker, 'height', '100%');
      this.renderer.setStyle(marker, 'width', RESIZE_HANDLE_WIDTH);
    } else if (this.resizeDirection === 'vertical') {
      this.renderer.setStyle(marker, 'width', '100%');
      this.renderer.setStyle(marker, 'height', RESIZE_HANDLE_WIDTH);
    } else if (this.resizeDirection === 'diagonal') {
      this.renderer.setStyle(marker, 'width', RESIZE_HANDLE_WIDTH);
      this.renderer.setStyle(marker, 'height', RESIZE_HANDLE_WIDTH);
    }

    this.renderer.listen(marker, 'mousedown', (event: MouseEvent) => this.onDragStart(event));
    this.renderer.appendChild(this.elementRef.nativeElement, marker);
  }

  private getCursorForDirection(): string {
    switch (this.resizeDirection) {
      case 'horizontal':
        return 'ew-resize';
      case 'vertical':
        return 'ns-resize';
      case 'diagonal':
        return 'nwse-resize';
      default:
        return 'default';
    }
  }

  private updateResizeMarkerPosition() {
    const marker = this.elementRef.nativeElement.querySelector('div');
    if (marker) {
      // Reset positioning styles first
      this.renderer.setStyle(marker, 'top', '');
      this.renderer.setStyle(marker, 'left', '');
      this.renderer.setStyle(marker, 'bottom', '');
      this.renderer.setStyle(marker, 'right', '');

      switch (this.markerPosition) {
        case 'top':
          this.renderer.setStyle(marker, 'top', '0');
          this.renderer.setStyle(marker, 'left', '50%');
          this.renderer.setStyle(marker, 'transform', 'translateX(-50%)');
          break;
        case 'bottom':
          this.renderer.setStyle(marker, 'bottom', '0');
          this.renderer.setStyle(marker, 'left', '50%');
          this.renderer.setStyle(marker, 'transform', 'translateX(-50%)');
          break;
        case 'left':
          this.renderer.setStyle(marker, 'left', '0');
          this.renderer.setStyle(marker, 'top', '50%');
          this.renderer.setStyle(marker, 'transform', 'translateY(-50%)');
          break;
        case 'right':
          this.renderer.setStyle(marker, 'right', '0');
          this.renderer.setStyle(marker, 'top', '50%');
          this.renderer.setStyle(marker, 'transform', 'translateY(-50%)');
          break;
        case 'top-left':
          this.renderer.setStyle(marker, 'top', '0');
          this.renderer.setStyle(marker, 'left', '0');
          break;
        case 'top-right':
          this.renderer.setStyle(marker, 'top', '0');
          this.renderer.setStyle(marker, 'right', '0');
          break;
        case 'bottom-left':
          this.renderer.setStyle(marker, 'bottom', '0');
          this.renderer.setStyle(marker, 'left', '0');
          break;
        case 'bottom-right':
          this.renderer.setStyle(marker, 'bottom', '0');
          this.renderer.setStyle(marker, 'right', '0');
          break;
      }
    }
  }

  private onDragStart(event: MouseEvent) {
    if (event.button === 0) { // Left mouse button
      this.isResizing = true;
      this.startX = event.clientX;
      this.startY = event.clientY;
      this.initialWidth = this.elementRef.nativeElement.clientWidth;
      this.initialHeight = this.elementRef.nativeElement.clientHeight;
      event.preventDefault();

      // Attach mousemove and mouseup event listeners to the document
      this.resizeListener = this.renderer.listen('document', 'mousemove', this.onMouseMove.bind(this));
      this.endResizeListener = this.renderer.listen('document', 'mouseup', this.onMouseUp.bind(this));
    }
  }

  private onMouseMove(event: MouseEvent) {
    if (this.isResizing) {
      let newWidth = this.initialWidth;
      let newHeight = this.initialHeight;

      if (this.resizeDirection === 'horizontal' || this.resizeDirection === 'diagonal') {
        newWidth = Math.max(this.initialWidth + (event.clientX - this.startX), this.minWidth);
      }

      if (this.resizeDirection === 'vertical' || this.resizeDirection === 'diagonal') {
        newHeight = Math.max(this.initialHeight + (event.clientY - this.startY), this.minHeight);
      }

      // Use requestAnimationFrame to improve performance
      requestAnimationFrame(() => {
        if (this.resizeDirection === 'horizontal' || this.resizeDirection === 'diagonal') {
          this.setPanelWidth(newWidth);
        }
        if (this.resizeDirection === 'vertical' || this.resizeDirection === 'diagonal') {
          this.setPanelHeight(newHeight);
        }
      });

      event.preventDefault();
    }
  }

  private onMouseUp() {
    if (this.isResizing) {
      this.isResizing = false;

      // Remove the mousemove and mouseup event listeners from the document
      if (this.resizeListener) this.resizeListener();
      if (this.endResizeListener) this.endResizeListener();

      // Emit the final size values
      const finalWidth = this.elementRef.nativeElement.clientWidth;
      const finalHeight = this.elementRef.nativeElement.clientHeight;
      this.onResize.emit({ width: finalWidth, height: finalHeight });
    }
  }

  private setPanelWidth(newWidth: number) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${newWidth}px`);
  }

  private setPanelHeight(newHeight: number) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', `${newHeight}px`);
  }

  private updateResizableDimensions() {
    if (this.resizableWidth > 0) {
      this.setPanelWidth(this.resizableWidth);
    }
    if (this.minHeight > 0) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'min-height', `${this.minHeight}px`);
    }
  }
}
