import { NgModule } from '@angular/core';
import { RowDirective } from './row/row.directive';
import { ColDirective } from './col/col.directive';

@NgModule({
  declarations:[RowDirective, ColDirective],
  exports: [RowDirective, ColDirective],
  imports: [],
})
export class GridModule {}
