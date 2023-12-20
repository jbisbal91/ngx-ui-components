import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { Carousel } from './carousel.interface';

@Component({
  selector: 'ngx-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @ContentChildren(CarouselItemComponent)
  public carouselItems!: QueryList<CarouselItemComponent>;
  animationToLeft: boolean = false;
  animationToRigth: boolean = false;

  ngAfterContentInit(): void {
    this.carouselItems.first.isActive = true;
  }

  selectItem(carouselItem: CarouselItemComponent) {
    if (carouselItem.disabled) {
      return;
    }
    if (carouselItem === this.carouselItems.first) {
      return this.animationmoveToRight(carouselItem);
    }
    if (carouselItem === this.carouselItems.last) {
      return this.animationmoveToLeft(carouselItem);
    }
    return this.animationmoveToLeft(carouselItem);
  }

  animationmoveToLeft(ci: Carousel) {
    this.animationToLeft = true;
    setTimeout(() => {
      this.carouselItems.forEach((ci) => (ci.isActive = false));
      ci.isActive = true;
      this.animationToLeft = false;
    }, 500);
  }

  animationmoveToRight(ci: Carousel) {
    this.animationToRigth = true;
    this.carouselItems.forEach((ci) => (ci.isActive = false));
    ci.isActive = true;
    setTimeout(() => {
      this.animationToRigth = false;
    }, 500);
  }
}
