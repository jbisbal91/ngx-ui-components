import { NgModule } from '@angular/core';
import { RadioButtonComponent } from './radio-button.component';
import { RadioGroupComponent } from './radio-group.component';

@NgModule({
  exports: [RadioButtonComponent, RadioGroupComponent],
  imports: [RadioButtonComponent, RadioGroupComponent],
  declarations: [],
})
export class RadioButtonModule {}
