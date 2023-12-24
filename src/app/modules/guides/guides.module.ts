import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuidesComponent } from './pages/guides/guides.component';
import { GuidesRoutingModule } from './guides-routing.module';

@NgModule({
  declarations: [GuidesComponent],
  exports: [GuidesComponent],
  imports: [CommonModule, GuidesRoutingModule],
})
export class GuidesModule {}
