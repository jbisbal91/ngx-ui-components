import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidesComponent } from './pages/guides/guides.component';


const routes: Routes = [
  {
    path: '',
    component: GuidesComponent,
    children: [
      // { path: '', component: HomepageComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule { }
