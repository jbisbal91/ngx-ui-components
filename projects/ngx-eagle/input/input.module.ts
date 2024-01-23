import { NgModule } from '@angular/core';
import { InputDirective } from './input.directive';
import { LabelDirective } from './label.directive';
import { FormFieldComponent } from './form-field.component';
import { ErrorDirective } from './error.directive';

@NgModule({
  exports: [FormFieldComponent, InputDirective, LabelDirective, ErrorDirective],
  imports: [FormFieldComponent, InputDirective, LabelDirective, ErrorDirective],
})
export class InputModule {}
