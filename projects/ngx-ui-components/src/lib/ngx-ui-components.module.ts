import { NgModule } from '@angular/core';
import { NgxUiComponentsComponent } from './ngx-ui-components.component';
import { CarouselComponent } from './components/carousel/carousel.component';



@NgModule({
  declarations: [
    NgxUiComponentsComponent,
    CarouselComponent
  ],
  imports: [
  ],
  exports: [
    NgxUiComponentsComponent
  ]
})
export class NgxUiComponentsModule { }
