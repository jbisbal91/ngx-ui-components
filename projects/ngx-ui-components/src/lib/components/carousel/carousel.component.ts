import { Component, ContentChildren, QueryList } from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@Component({
  selector: 'ngx-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @ContentChildren(CarouselItemComponent)
  public carouselItems!: QueryList<CarouselItemComponent>;

  ngAfterContentInit(): void {
    this.carouselItems.first.isActive = true;
  }

  selectItem(carouselItem: CarouselItemComponent) {
    carouselItem.isActive = true;
    this.carouselItems.forEach((ci) => {
      if (ci.id !== carouselItem.id) {
        ci.isActive = false;
      }
    });
    const element = document.getElementById(carouselItem.id);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
