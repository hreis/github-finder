import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubFinderRoutingModule } from './github-finder-routing.module';
import { GithubfinderComponent } from './page/githubfinder.component';
import { GithubFinderTextboxComponent } from './components/github-finder-textbox/github-finder-textbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardGithubProfileComponent } from './components/card-github-profile/card-github-profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [GithubfinderComponent, GithubFinderTextboxComponent, CardGithubProfileComponent],
  imports: [
    CommonModule,
    GithubFinderRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [
    NotificationService
  ]
})
export class GithubFinderModule { }
