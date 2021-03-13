import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteGithubUserComponent } from './components/note-github-user/note-github-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [NoteGithubUserComponent],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    NoteGithubUserComponent
  ]
})
export class NoteGithubUserModule { }
