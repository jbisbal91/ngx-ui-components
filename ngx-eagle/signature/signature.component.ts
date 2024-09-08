import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { pairwise, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'csl-signature',
  templateUrl: './csl-signature.component.html',
  styleUrls: ['./csl-signature.component.scss'],
  standalone: true
})
export class CslSignatureComponent implements AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('canvas') public canvas!: ElementRef<HTMLCanvasElement>;
  @Output() signatureComplete = new EventEmitter<string>();
  public dirty = false;
  @Input() public width = 0;
  @Input() public height = 0;
  @Input() pointerColor: string = '#000';

  private ctx!: CanvasRenderingContext2D;
  private subscriptions: Subscription[] = [];

  public ngAfterViewInit() {
    this.initCanvas();
    this.captureEvents(this.canvas.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pointerColor'] && this.ctx) {
      this.ctx.strokeStyle = changes['pointerColor'].currentValue;
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private initCanvas(): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.ctx = canvasEl.getContext('2d')!;
    canvasEl.width = this.width || canvasEl.offsetParent?.clientWidth || 0;
    canvasEl.height = this.height || canvasEl.offsetParent?.clientHeight || 0;
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = this.pointerColor;
  }

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
      const image = this.getImage();
      this.signatureComplete.emit(image);
    });

    this.subscriptions.push(subscription, stopDrawingSubscription);
  }

  private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
    if (!this.ctx) { return; }
    this.ctx.beginPath();
    this.ctx.moveTo(prevPos.x, prevPos.y);
    this.ctx.lineTo(currentPos.x, currentPos.y);
    this.ctx.stroke();
    this.dirty = true;
  }

  public clean() {
    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.dirty = false;
  }

  public getImage(): string {
    return this.canvas.nativeElement.toDataURL();
  }
}
