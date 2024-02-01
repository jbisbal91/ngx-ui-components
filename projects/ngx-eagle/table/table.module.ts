import { NgModule } from '@angular/core';
import { TableDirective } from './table/table.directive';
import { TableComponent } from './table/table/table.component';

@NgModule({
  exports: [TableDirective,TableComponent],
  imports: [TableDirective,TableComponent],
})
export class TableModule {}
