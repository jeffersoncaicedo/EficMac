import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescarguePagePage } from './descargue-page.page';

const routes: Routes = [
  {
    path: '',
    component: DescarguePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescarguePagePageRoutingModule {}
