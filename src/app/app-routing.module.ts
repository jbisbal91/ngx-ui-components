import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/homepage/homepage.module').then((m) => m.HomepageModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/component/component.module').then((m) => m.ComponentModule)
  },
  {
    path: 'guides',
    loadChildren: () => import('./modules/guides/guides.module').then((m) => m.GuidesModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
