import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { GithubFinderService } from 'src/app/components/github-finder/services/github-finder.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { NoteGithubUserComponent } from '../../../note-github-user/components/note-github-user/note-github-user.component';
import { IEditGithubDTO } from '../model/editGithubDTO';

@Component({
  selector: 'app-githubuser-edit-dialog',
  templateUrl: './githubuser-edit-dialog.component.html',
  styleUrls: ['./githubuser-edit-dialog.component.scss']
})
export class GithubuserEditDialogComponent implements OnInit, OnDestroy {

  @ViewChild(NoteGithubUserComponent) noteGithubUserComponent: NoteGithubUserComponent;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IEditGithubDTO,
    private githubFinderService: GithubFinderService,
    private notificationService: NotificationService) { }

  updateGithubNote$: Subscription;
  insertGithubNote$: Subscription;
  note: string;

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.updateGithubNote$) this.updateGithubNote$.unsubscribe();
    if (this.insertGithubNote$) this.insertGithubNote$.unsubscribe();
  }

  save() {
    const note = this.noteGithubUserComponent.formNote.get('fcNotes')?.value;
    this.setNote(note);
  }

  setNote(note: string) {

    this.updateGithubNote$ = this.githubFinderService.setUserNoteById(this.data.userId, note)
      .subscribe(seted => {

        if (seted) {
          this.notificationService.success('Successfully Edited');
          this.note = note;
        };
      }, err => {
        this.notificationService.error(err);
      });

  }

}
