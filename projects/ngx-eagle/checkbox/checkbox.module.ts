import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
import { Guid } from '../services/guid/guid.service';

@NgModule({
  exports: [CheckboxComponent],
  imports: [CheckboxComponent],
  
  providers: [Guid],
})
export class CheckboxModule {}
