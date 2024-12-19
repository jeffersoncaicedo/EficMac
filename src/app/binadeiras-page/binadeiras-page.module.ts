import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BinadeirasPagePageRoutingModule } from './binadeiras-page-routing.module';

import { BinadeirasPagePage } from './binadeiras-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BinadeirasPagePageRoutingModule
  ],
  declarations: [BinadeirasPagePage]
})
export class BinadeirasPagePageModule {}
