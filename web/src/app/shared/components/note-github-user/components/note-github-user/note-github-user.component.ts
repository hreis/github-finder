import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GithubUserNoteService } from '../../service/github-user-note.service';

@Component({
  selector: 'app-note-github-user',
  templateUrl: './note-github-user.component.html',
  styleUrls: ['./note-github-user.component.scss']
})
export class NoteGithubUserComponent implements OnInit {

  formNote: FormGroup;
  type: string;

  @Input() userId: number;

  //note$: Observable<GitHubUserNote>;

  constructor(private _formBuilder: FormBuilder, private githubUserNoteService: GithubUserNoteService) { }

  ngOnInit(): void {
    this.initForm();

    debugger

    if (this.userId) {
      this.githubUserNoteService.getUserNoteById(this.userId).subscribe(note => {
        debugger
        if (note) {
          this.formNote.get('fcNotes')?.setValue(note)
          this.type = 'update';
        }
        else this.type = 'create';

      }, err => {
        debugger
        err
      });
    }

  }

  initForm() {
    this.formNote = this._formBuilder.group({
      fcNotes: [''],
    });
  }

}
