import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, booleanAttribute, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { pairwise, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ngx-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf]
})
export class SignatureComponent implements AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('canvas') public canvas!: ElementRef<HTMLCanvasElement>;
  
  @Input() public width = 400;
  @Input() public height = 150;
  @Input() pointerColors: string[] = ['#000000', '#2A7CFF'];
  @Input() pointerColor: string = '#000000';
  @Input({ transform: booleanAttribute }) showClearButton = true;
  @Input({ transform: booleanAttribute }) showPointerColors: boolean = true;

  @Output() signatureComplete = new EventEmitter<string>();

  public dirty = false;

  private ctx!: CanvasRenderingContext2D;
  private subscriptions: Subscription[] = [];

  /**
   * Lifecycle hook that is called after a component's view has been fully initialized.
   * Initializes the canvas and sets up event capturing.
   */
  public ngAfterViewInit() {
    this.initCanvas();
    this.captureEvents(this.canvas.nativeElement);
  }

  /**
   * Changes the pointer color for drawing on the canvas.
   * @param color The new color to set.
   */
  changeColor(color: string) {
    this.pointerColor = color;
    this.ctx.strokeStyle = color;
  }

  /**
   * Lifecycle hook that is called when any data-bound property of a directive changes.
   * @param changes The changed properties.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pointerColor'] && this.ctx) {
      this.ctx.strokeStyle = changes['pointerColor'].currentValue;
    }
  }

  /**
   * Lifecycle hook that is called when a directive, pipe, or service is destroyed.
   * Unsubscribes from all subscriptions to prevent memory leaks.
   */
  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  /**
   * Initializes the canvas element and its context.
   */
  private initCanvas(): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.ctx = canvasEl.getContext('2d')!;
    canvasEl.width = this.width || canvasEl.offsetParent?.clientWidth || 0;
    canvasEl.height = this.height || canvasEl.offsetParent?.clientHeight || 0;
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = this.pointerColor;
  }

  /**
   * Captures mouse events on the canvas and sets up drawing logic.
   * @param canvasEl The canvas element to capture events from.
   */
  private captureEvents(canvasEl: HTMLCanvasElement) {
    const mouseDown$ = fromEvent(canvasEl, 'mousedown');
    const mouseMove$ = fromEvent(canvasEl, 'mousemove');
    const mouseUp$ = fromEvent(window, 'mouseup');
    const mouseLeave$ = fromEvent(canvasEl, 'mouseleave');

    const drawing$ = mouseDown$.pipe(
      switchMap(() => mouseMove$.pipe(
        takeUntil(mouseUp$),
        takeUntil(mouseLeave$),
        pairwise()
      ))
    );

    const subscription = drawing$.subscribe(([prev, current]: [Event, Event]) => {
      if (prev instanceof MouseEvent && current instanceof MouseEvent) {
        const rect = canvasEl.getBoundingClientRect();
        const prevPos = {
          x: prev.clientX - rect.left,
          y: prev.clientY - rect.top
        };
        const currentPos = {
          x: current.clientX - rect.left,
          y: current.clientY - rect.top
        };
        this.drawOnCanvas(prevPos, currentPos);
      }
    });

    const stopDrawingSubscription = mouseUp$.subscribe(() => {
      var image = this.getImage();
      setTimeout(() => this.signatureComplete.emit(this.dirty ? image : '')); // Emit only if signature is dirty
    });

    this.subscriptions.push(subscription, stopDrawingSubscription);
  }

  /**
   * Draws a line on the canvas from the previous position to the current position.
   * @param prevPos The previous position.
   * @param currentPos The current position.
   */
  private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
    if (!this.ctx) { return; }
    this.ctx.beginPath();
    this.ctx.moveTo(prevPos.x, prevPos.y);
    this.ctx.lineTo(currentPos.x, currentPos.y);
    this.ctx.stroke();
    this.dirty = true;
  }

  /**
   * Clears the canvas.
   */
  public clean() {
    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.dirty = false;
  }

  /**
   * Returns the current image data URL of the canvas.
   * @returns The image data URL.
   */
  public getImage(): string {
    return this.canvas.nativeElement.toDataURL();
  }
}