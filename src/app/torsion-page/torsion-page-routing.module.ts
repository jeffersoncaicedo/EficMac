import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TorsionPagePage } from './torsion-page.page';

const routes: Routes = [
  {
    path: '',
    component: TorsionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorsionPagePageRoutingModule {}
