import { NgModule } from '@angular/core';
import { TableDirective } from './table/table.directive';
import { ColumnGroupDirective } from './table/column-group.directive';
import { SortDirective } from './table/sort.directive';

@NgModule({
  exports: [TableDirective, ColumnGroupDirective, SortDirective],
  imports: [TableDirective, ColumnGroupDirective, SortDirective],
})
export class TableModule {}
