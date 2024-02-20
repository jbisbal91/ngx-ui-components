import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';
import { OptionComponent } from './option.component';

@NgModule({
  imports: [SelectComponent, OptionComponent],
  exports: [SelectComponent, OptionComponent],
})
export class SelectModule {}
