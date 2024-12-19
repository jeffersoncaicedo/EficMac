import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KghPagePageRoutingModule } from './kgh-page-routing.module';

import { KghPagePage } from './kgh-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KghPagePageRoutingModule
  ],
  declarations: [KghPagePage]
})
export class KghPagePageModule {}
