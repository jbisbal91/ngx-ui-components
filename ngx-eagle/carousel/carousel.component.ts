import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  QueryList,
  booleanAttribute,
} from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'ngx-carousel',
  template: `
    <div class="ngx-carousel">
      <div class="slick-initialized slick-slider">
        <div class="slick-list">
          <div class="slick-track">
            <ng-content></ng-content>
          </div>
        </div>

        <ul class="slick-list slick-dots slick-dots-bottom">
          <li
            [class.slick-active]="carouselItem.isActive"
            *ngFor="let carouselItem of carouselItems"
            (click)="onClick(carouselItem)"
          >
            <button>{{ carouselItem.id }}</button>
          </li>
        </ul>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ngx-carousel',
  },
  standalone: true,
  imports: [NgForOf],
})
export class CarouselComponent implements AfterContentInit {
  @ContentChildren(CarouselItemComponent)
  public carouselItems!: QueryList<CarouselItemComponent>;
  @Input({ transform: booleanAttribute }) ngxAutoPlay!: boolean;
  @Input() ngxAutoPlaySpeed: number = 3000;

  currentItem!: CarouselItemComponent;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentInit(): void {
    this.carouselItems.first.isActive = true;
    this.currentItem = this.carouselItems.first;
    this.cdr.markForCheck();
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
