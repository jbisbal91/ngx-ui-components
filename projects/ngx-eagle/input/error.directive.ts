import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'span[ngx-error]',
  host: {
    class: 'ngx-error',
  },
  standalone: true,
})
export class ErrorDirective implements OnInit {
  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {
    this.setPositionErrorNode();
  }

  setPositionErrorNode() {
    setTimeout(() => {
    const formFieldNode = this.elementRef.nativeElement.parentElement;
    const formFieldHeight = formFieldNode.offsetHeight;
    this.elementRef.nativeElement.style.marginTop = `${
      (formFieldHeight + 5) / 16
    }rem`;
  });
  }
}
