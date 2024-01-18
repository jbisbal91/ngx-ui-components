import { NgModule } from '@angular/core';
import { InputDirective } from './input.directive';
import { LabelDirective } from './label.directive';

@NgModule({
  exports: [InputDirective, LabelDirective],
  imports: [InputDirective, LabelDirective],
})
export class InputModule {}
