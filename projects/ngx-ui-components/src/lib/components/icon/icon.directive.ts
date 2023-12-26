import {
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[ngx-icon]',
})
export class IconDirective implements OnInit {
  @Input() ngxType = '';
  @Input() ngxTheme = 'outline';

  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit() {
    // <svg viewBox="0 0 1024 1024" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="step-backward" aria-hidden="true"><path d="M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 000 33.9M330 864h-64a8 8 0 01-8-8V168a8 8 0 018-8h64a8 8 0 018 8v688a8 8 0 01-8 8"></path></svg>

    if (this.elementRef.nativeElement.localName === 'span') {
      this.renderer2.addClass(this.elementRef.nativeElement, 'flex');
      this.renderer2.addClass(this.elementRef.nativeElement, 'justify-center');
      this.renderer2.addClass(this.elementRef.nativeElement, 'items-center');

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('height', '24');
      svg.setAttribute('width', '24');
      svg.setAttribute('viewBox', '0 0 1024 1024');

      const path = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      );
      const d = this.paths.find((p) => p?.ngxType === this.ngxType)?.path || '';
      path.setAttribute('d', d);

      svg.appendChild(path);
      this.elementRef.nativeElement.appendChild(svg);
    }
  }

  paths: { ngxType: string; path: string }[] = [
    {
      ngxType: 'step-backward',
      path: 'M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 000 33.9M330 864h-64a8 8 0 01-8-8V168a8 8 0 018-8h64a8 8 0 018 8v688a8 8 0 01-8 8',
    },
    {
      ngxType: 'step-forward',
      path: 'M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 010 33.9M694 864h64a8 8 0 008-8V168a8 8 0 00-8-8h-64a8 8 0 00-8 8v688a8 8 0 008 8',
    },
    { ngxType: '', path: '' },
    { ngxType: '', path: '' },
    { ngxType: '', path: '' },
    { ngxType: '', path: '' },
    { ngxType: '', path: '' },
  ];
}
