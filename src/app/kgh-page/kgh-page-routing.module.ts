import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KghPagePage } from './kgh-page.page';

const routes: Routes = [
  {
    path: '',
    component: KghPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KghPagePageRoutingModule {}
