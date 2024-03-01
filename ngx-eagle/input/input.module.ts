import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import { NgxOutlinedTextFieldComponent } from './ngx-outlined-text-field.component/ngx-outlined-text-field.component';

@NgModule({
  exports: [InputComponent,NgxOutlinedTextFieldComponent],
  imports: [InputComponent,NgxOutlinedTextFieldComponent],
})
export class InputModule {}
