import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TorsionPagePageRoutingModule } from './torsion-page-routing.module';

import { TorsionPagePage } from './torsion-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TorsionPagePageRoutingModule
  ],
  declarations: [TorsionPagePage]
})
export class TorsionPagePageModule {}
