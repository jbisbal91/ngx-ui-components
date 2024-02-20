import {
  Component,
  ElementRef,
  Host,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import { SelectComponent } from './select.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-option',
  template: `
    <div (click)="onClick()" #option_item class="ngx-option">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
})
export class OptionComponent implements OnInit, OnDestroy {
  @ViewChild('option_item') optionItemRef!: ElementRef;
  @Input() value: string = '';

  inputRef!: ElementRef;
  private subscription: Subscription = new Subscription();

  constructor(@Optional() @Host() public selectComponent: SelectComponent) {}

  ngOnInit(): void {
    this.subscription.add(
      this.selectComponent?.containerRef$.subscribe((containerRef) => {
        const containerWidth = containerRef.nativeElement.offsetWidth;
        const containerHeight = containerRef.nativeElement.offsetHeight - 8;
        this.optionItemRef.nativeElement.style.width = `${
          containerWidth / 16
        }rem`;
        this.optionItemRef.nativeElement.style.height = `${
          containerHeight / 16
        }rem`;
      })
    );
    this.subscription.add(
      this.selectComponent?.inputRef$.subscribe((inputRef) => {
        this.inputRef = inputRef;
      })
    );
  }

  onClick() {
    this.inputRef.nativeElement.value =
      this.optionItemRef.nativeElement.textContent;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
