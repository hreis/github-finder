import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubfinderComponent } from './page/githubfinder.component';

const routes: Routes = [
  {
    path: '',
    component: GithubfinderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubFinderRoutingModule { }
