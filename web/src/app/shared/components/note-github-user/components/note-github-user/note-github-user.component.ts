import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { GithubUserNoteService } from '../../service/github-user-note.service';

@Component({
  selector: 'app-note-github-user',
  templateUrl: './note-github-user.component.html',
  styleUrls: ['./note-github-user.component.scss']
})
export class NoteGithubUserComponent implements OnInit {

  formNote: FormGroup;
  type: string;

  @Input() isEditable: boolean = false;
  @Input() userId: number;
  @Input() note: string;

  //note$: Observable<GitHubUserNote>;

  constructor(private _formBuilder: FormBuilder,
    private githubUserNoteService: GithubUserNoteService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.initForm();

    if (this.userId) {
      this.githubUserNoteService.getUserNoteById(this.userId).subscribe(data => {
        if (data.note) this.formNote.get('fcNotes')?.setValue(data.note)
      }, err => {
        this.notificationService.error(err);
      });
    }

  }

  initForm() {
    this.formNote = this._formBuilder.group({
      fcNotes: [{ value: this.note || '', disabled: this.isEditable }],
    });
  }

}
