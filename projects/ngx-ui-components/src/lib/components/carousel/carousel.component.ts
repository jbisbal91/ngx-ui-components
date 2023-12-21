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
  animationRightToCenter: boolean = false;

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
    return this.animationmoveToLeft(carouselItem);
  }

  animationmoveToLeft(carousel: CarouselItemComponent) {
    this.animationToLeft = true;
    setTimeout(() => {
      this.animationToLeft = false;
      carousel.isActive = true;
      this.carouselItems.forEach((ci) => {
        if (carousel.id !== ci.id) {
          ci.isActive = false;
        }
      });
    }, 300);
  }

  animationmoveToRight(carousel: CarouselItemComponent) {
    this.animationToRigth = true;
    this.carouselItems.forEach((ci) => (ci.isActive = false));
    carousel.isActive = true;
    setTimeout(() => {
      this.animationToRigth = false;
    }, 300);
  }
}
