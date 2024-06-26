import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovielandIamPage } from './movieland-iam.page';

const routes: Routes = [
  {
    path: '',
    component: MovielandIamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovielandIamPageRoutingModule {}
