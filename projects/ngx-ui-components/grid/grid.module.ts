import { NgModule } from '@angular/core';
import { RowDirective } from './row/row.directive';
import { ColDirective } from './col/col.directive';

@NgModule({
  exports: [RowDirective, ColDirective],
  imports: [RowDirective, ColDirective],
})
export class GridModule {}
