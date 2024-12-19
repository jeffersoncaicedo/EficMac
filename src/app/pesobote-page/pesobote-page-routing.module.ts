import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesobotePagePage } from './pesobote-page.page';

const routes: Routes = [
  {
    path: '',
    component: PesobotePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesobotePagePageRoutingModule {}
