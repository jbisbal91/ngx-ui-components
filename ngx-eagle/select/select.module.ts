import { NgModule } from '@angular/core';
import { NgxOutlinedSelectFieldComponent } from './ngx-outlined-select-field/ngx-outlined-select-field.component';
import { NgxOptionComponent } from './ngx-option/ngx-option.component';
import { InputModule } from 'ngx-eagle/input';

@NgModule({
  imports: [InputModule,NgxOutlinedSelectFieldComponent, NgxOptionComponent],
  exports: [NgxOutlinedSelectFieldComponent, NgxOptionComponent],
})
export class SelectModule {}
