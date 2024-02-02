import { NgModule } from '@angular/core';
import { TableDirective } from './table/table.directive';
import { ColumnGroupDirective } from './table/column-group.directive';

@NgModule({
  exports: [TableDirective,ColumnGroupDirective],
  imports: [TableDirective,ColumnGroupDirective],
})
export class TableModule {}
