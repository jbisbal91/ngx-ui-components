import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngx-button]',
  host: {
    class: 'ngx-button',
    '[class.ngx-button-primary]': 'ngxType === "primary"',
    '[class.ngx-button-default]': 'ngxType === "default"',
    '[class.ngx-button-dashed]': 'ngxType === "dashed"',
    '[class.ngx-button-text]': 'ngxType === "text"',
    '[class.ngx-button-link]': 'ngxType === "link"',
  },
})
export class NgxButtonDirective implements OnInit {
  @Input() ngxType: 'primary' | 'default' | 'dashed' | 'text' | 'link' =
    'default';
  disabled: boolean = false;
  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit() {
    this.setStyle();
  }

  setStyle() {
 
  }

  hover(disabled: boolean) {

  }
}
