import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BinadeirasPagePage } from './binadeiras-page.page';

const routes: Routes = [
  {
    path: '',
    component: BinadeirasPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BinadeirasPagePageRoutingModule {}
