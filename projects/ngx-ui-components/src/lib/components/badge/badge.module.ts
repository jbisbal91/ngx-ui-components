import { NgModule } from '@angular/core';
import { BadgeDirective } from './badge.directive';

@NgModule({
  declarations: [BadgeDirective],
  exports: [BadgeDirective],
})
export class BadgeModule {}
