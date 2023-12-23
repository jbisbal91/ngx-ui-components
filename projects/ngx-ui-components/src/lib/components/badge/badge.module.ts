import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeDirective } from './badge.directive';

@NgModule({
  declarations:[BadgeDirective],
  exports: [BadgeDirective],
  imports: [CommonModule ]
})

export class BadgeModule {}
