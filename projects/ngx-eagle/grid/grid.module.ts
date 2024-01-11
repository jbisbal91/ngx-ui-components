import { NgModule } from '@angular/core';
import { RowDirective } from './row/row.directive';
import { ColDirective } from './col/col.directive';
import { CommonModule } from '@angular/common';

const directives = [RowDirective, ColDirective];

@NgModule({
  declarations: [directives],
  exports: [directives],
  imports: [CommonModule],
})
export class GridModule {}
