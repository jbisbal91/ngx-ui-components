import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  booleanAttribute,
} from '@angular/core';

import { NgForOf } from '@angular/common';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Component({
  selector: 'ngx-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  host: {
    class: 'ngx-carousel',
  },
  standalone: true,
  imports: [NgForOf],
})
export class CarouselComponent implements AfterContentInit {
  @ContentChildren(CarouselItemComponent)
  public carouselItems: QueryList<CarouselItemComponent> =
    new QueryList<CarouselItemComponent>();
  @Input({ transform: booleanAttribute }) ngxAutoPlay: boolean = false;
  @Input() ngxAutoPlaySpeed: number = 3000;

  @ViewChild('carousel_container') carouselRef!: ElementRef;

  ngAfterContentInit(): void {
    this.carouselItems.first.isActive = true;
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
      ci.isActive = ci.id === carouselItem.id;
    });
  }
}
