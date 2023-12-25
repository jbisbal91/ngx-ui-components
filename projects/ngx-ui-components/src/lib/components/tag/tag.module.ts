import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';

@NgModule({
  declarations: [TagComponent],
  exports: [TagComponent],
  imports: [CommonModule],
})
export class TagModule {}
