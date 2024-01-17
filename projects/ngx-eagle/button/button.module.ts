import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button/button.directive';

@NgModule({
  exports: [ButtonDirective],
  imports: [ButtonDirective, CommonModule],
})
export class ButtonModule {}
