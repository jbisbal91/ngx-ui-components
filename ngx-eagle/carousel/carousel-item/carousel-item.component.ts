import { Component, Input } from '@angular/core';
import { Carousel } from './carousel.interface';
import { Guid } from 'ngx-eagle/core/services';
@Component({
  selector: 'ngx-carousel-item',
  templateUrl: './carousel-item.component.html',
  host: {
    class: 'ngx-carousel-item',
  },
  standalone: true,
})
export class CarouselItemComponent implements Carousel {
  public id: string = Guid.create();
  public isActive: boolean = false;
  @Input() disabled: boolean = false;
}
