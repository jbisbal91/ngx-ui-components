import { NgModule } from '@angular/core';

import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  exports: [CarouselComponent, CarouselItemComponent],
  imports: [CarouselComponent, CarouselItemComponent],
})
export class CarouselModule {}
