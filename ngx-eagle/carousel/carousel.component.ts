import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  Renderer2,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'ngx-carousel',
  template: `
    <div class="ngx-carousel">
      <div class="slick-slider">
        <div class="slick-list">
          <div #slick_track class="slick-track">
            <ng-content></ng-content>
          </div>
        </div>
        <ul class="slick-list slick-dots slick-dots-bottom">
          <li
            [class.slick-active]="carouselItem.isActive"
            *ngFor="let carouselItem of carouselItems"
          >
            <button (click)="onClick(carouselItem)"></button>
          </li>
        </ul>
      </div>
    </div>
  `,
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
  @Input({ transform: booleanAttribute }) ngxAutoPlay!: boolean;
  @Input() ngxAutoPlaySpeed: number = 3000;

  @ViewChild('slick_track') slickTrackRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

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

    const index = this.carouselItems
      .toArray()
      .findIndex((ci) => ci.id === carouselItem.id);
    const carouselRef = document.getElementById(carouselItem.id) as HTMLElement;
    const carouselProp = carouselRef.getBoundingClientRect();

    this.renderer.setStyle(
      this.slickTrackRef.nativeElement,
      'transform',
      `translate(${carouselProp.width * -index}px)`
    );
  }
}
