import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'github-info' },
  {
    path: 'github-info',
    loadChildren: () =>
      import('./components/github-finder/github-finder.module').then((m) => m.GithubFinderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
