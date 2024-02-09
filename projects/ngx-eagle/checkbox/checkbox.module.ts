import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
import { GuidService } from './guid.service';

@NgModule({
  exports: [CheckboxComponent],
  imports: [CheckboxComponent],
  
  providers: [GuidService],
})
export class CheckboxModule {}
