import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'torsion-page',
    loadChildren: () => import('./torsion-page/torsion-page.module').then( m => m.TorsionPagePageModule)
  },
  {
    path: 'kgh-page',
    loadChildren: () => import('./kgh-page/kgh-page.module').then( m => m.KghPagePageModule)
  },
  {
    path: 'binadeiras-page',
    loadChildren: () => import('./binadeiras-page/binadeiras-page.module').then( m => m.BinadeirasPagePageModule)
  },
  {
    path: 'descargue-page',
    loadChildren: () => import('./descargue-page/descargue-page.module').then( m => m.DescarguePagePageModule)
  },
  {
    path: 'pesobote-page',
    loadChildren: () => import('./pesobote-page/pesobote-page.module').then( m => m.PesobotePagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
