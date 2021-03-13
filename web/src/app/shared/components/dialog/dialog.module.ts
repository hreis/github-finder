import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NoteGithubUserModule } from '../note-github-user/note-github-user.module';
import { GithubuserEditDialogComponent } from './githubuser-edit-dialog/page/githubuser-edit-dialog.component';

@NgModule({
  declarations: [GithubuserEditDialogComponent],
  imports: [
    CommonModule,
    DialogRoutingModule,

    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    NoteGithubUserModule
  ]
})
export class DialogModule { }
