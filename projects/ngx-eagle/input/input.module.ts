import { NgModule } from '@angular/core';
import { InputDirective } from './input.directive';
import { LabelDirective } from './label.directive';
import { FormFieldComponent } from './form-field.component';

@NgModule({
  exports: [FormFieldComponent, InputDirective, LabelDirective],
  imports: [FormFieldComponent, InputDirective, LabelDirective],
})
export class InputModule {}
