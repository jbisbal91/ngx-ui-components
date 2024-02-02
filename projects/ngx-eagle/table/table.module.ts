import { NgModule } from '@angular/core';
import { TableDirective } from './table/table.directive';

@NgModule({
  exports: [TableDirective],
  imports: [TableDirective],
})
export class TableModule {}
