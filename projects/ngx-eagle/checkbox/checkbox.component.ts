import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { GuidService } from './guid.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-checkbox',
  template: `
    <input
      #input_checkbox
      [id]="id"
      type="checkbox"
      [indeterminate]="indeterminate"
      [checked]="checked"
      [disabled]="disabled"
      (change)="eventChecked($event)"
    />
    <label [for]="id"><ng-content></ng-content></label>
  `,
  host: {
    class: 'ngx-checkbox',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CheckboxComponent
  implements AfterViewChecked, AfterViewInit, ControlValueAccessor
{
  @Input() indeterminate: boolean = false;
  @Input() checked: boolean = false;
  @Input() ngxColor: string | undefined | null = '#1890FF';

  @ViewChild('input_checkbox') inputCheckboxRef!: ElementRef;

  disabled: boolean = false;

  @Output() onChecked = new EventEmitter<any>();
  onChange: any = () => {
    this.onChecked.emit(this.checked);
  };
  onTouched: any = () => {};

  public id: string = '';

  constructor(
    private guidService: GuidService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.id = 'ngx-checkbox-' + this.guidService.guid() + '-input';
    this.disabled = elementRef.nativeElement.hasAttribute('disabled');
  }

  ngAfterViewChecked(): void {
    this.setColor();
  }

  ngAfterViewInit(): void {
    this.setColor();
  }

  eventChecked(event: Event) {
    if (!this.disabled) {
      this.checked = this.checked ? false : true;
      this.writeValue(this.checked);
    }
  }

  setColor() {
    if (!this.ngxColor) {
      this.ngxColor = '#1890FF';
    }
    if (
      this.inputCheckboxRef &&
      (this.inputCheckboxRef.nativeElement.indeterminate ||
        this.inputCheckboxRef.nativeElement.checked)
    ) {
      this.renderer.setStyle(
        this.inputCheckboxRef.nativeElement,
        'background-color',
        this.disabled ? '#9E9E9E' : this.ngxColor
      );
    } else {
      this.renderer.setStyle(
        this.inputCheckboxRef.nativeElement,
        'background-color',
        'transparent'
      );
    }
  }

  writeValue(checked: boolean): void {
    this.checked = checked;
    this.onChange(this.checked);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
  }
}
