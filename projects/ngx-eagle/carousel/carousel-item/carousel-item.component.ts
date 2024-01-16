import { Component, Input, OnInit } from '@angular/core';
import { Carousel } from '../carousel.interface';

@Component({
  selector: 'ngx-carousel-item',
  template: `
    <div class="ngx-carousel-item" [id]="id">
      <ng-content></ng-content>
    </div>
  `,
  host: {
    class: 'ngx-carousel-item',
  },
  standalone: true,
})
export class CarouselItemComponent implements Carousel, OnInit {
  public id: string = '';
  public isActive: boolean = false;
  @Input() disabled: boolean = false;

  ngOnInit(): void {
    this.id = this.guid();
  }

  guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
