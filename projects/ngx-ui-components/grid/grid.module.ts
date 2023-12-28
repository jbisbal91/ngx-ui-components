import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowDirective } from './row/row.directive';
import { ColDirective } from './col/col.directive';

@NgModule({
  declarations: [RowDirective, ColDirective],
  exports: [RowDirective, ColDirective],
  imports: [CommonModule],
})
export class GridModule {}
