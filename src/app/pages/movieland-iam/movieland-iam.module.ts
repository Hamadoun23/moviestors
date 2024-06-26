import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovielandIamPageRoutingModule } from './movieland-iam-routing.module';

import { MovielandIamPage } from './movieland-iam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovielandIamPageRoutingModule
  ],
  declarations: [MovielandIamPage]
})
export class MovielandIamPageModule {}
