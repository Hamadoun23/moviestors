import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviestorsPage } from './moviestors.page';

const routes: Routes = [
  {
    path: '',
    component: MoviestorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviestorsPageRoutingModule {}
