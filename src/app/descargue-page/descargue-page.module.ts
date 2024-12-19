import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescarguePagePageRoutingModule } from './descargue-page-routing.module';

import { DescarguePagePage } from './descargue-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescarguePagePageRoutingModule
  ],
  declarations: [DescarguePagePage]
})
export class DescarguePagePageModule {}
