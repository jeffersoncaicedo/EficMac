import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesobotePagePageRoutingModule } from './pesobote-page-routing.module';

import { PesobotePagePage } from './pesobote-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesobotePagePageRoutingModule
  ],
  declarations: [PesobotePagePage]
})
export class PesobotePagePageModule {}
