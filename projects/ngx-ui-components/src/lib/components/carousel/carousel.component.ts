import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  QueryList,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@Component({
  selector: 'ngx-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements AfterContentInit {
  @ContentChildren(CarouselItemComponent)
  public carouselItems!: QueryList<CarouselItemComponent>;
  @Input({ transform: booleanAttribute }) ngxAutoPlay: boolean = false;
  @Input({ transform: numberAttribute }) ngxAutoPlaySpeed: number = 3000;

  currentItem!: CarouselItemComponent;

  constructor() {}

  ngAfterContentInit(): void {
    this.carouselItems.first.isActive = true;
    this.currentItem = this.carouselItems.first;
    if (this.ngxAutoPlay) {
      this.autoPlay();
    }
  }

  autoPlay(index: number = 0) {
    setTimeout(() => {
      this.onClick(this.carouselItems.get(index));
      index = index === this.carouselItems.length - 1 ? 0 : ++index;
      this.autoPlay(index);
    }, this.ngxAutoPlaySpeed);
  }

  onClick(carouselItem: any) {
    this.carouselItems?.forEach((ci: any) => {
      ci.isActive = ci.id === carouselItem.id ? true : false;
    });
    const element = document.getElementById(carouselItem.id);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
