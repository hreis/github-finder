import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GithubuserEditDialogComponent } from 'src/app/shared/components/dialog/githubuser-edit-dialog/page/githubuser-edit-dialog.component';
import { NoteGithubUserComponent } from 'src/app/shared/components/note-github-user/components/note-github-user/note-github-user.component';
import { GitHubRepository } from '../../model/githubRepository';
import { GitHubUser } from '../../model/githubUser';
import { Language } from '../../model/Language';

@Component({
  selector: 'app-card-github-profile',
  templateUrl: './card-github-profile.component.html',
  styleUrls: ['./card-github-profile.component.scss']
})
export class CardGithubProfileComponent implements OnInit {

  formGroup: FormGroup;

  @Input() userReposLib: (GitHubUser | GitHubRepository[])[];
  @Output() sendToPreviouPage: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild(NoteGithubUserComponent) noteGithubUserComponent: NoteGithubUserComponent

  githubuser: GitHubUser;
  repositories: GitHubRepository[] = [];
  languages: Language[] = [];
  distinctArray: Language[] = [];
  stars: number = 0;
  watchers: number = 0;
  forks: number = 0;

  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.initForm();
    this.separatePages();
    this.getRepositoryInfos();
    this.setDistinctLanguage();
    this.setQtyAndPercentageLanguage();
    this.sortDistinctArrayByPercentage();
    this.setValueOnFormFields();
  }

  initForm() {
    this.formGroup = this._formBuilder.group({
      fcFollowers: [{ value: '', disabled: true }],
      fcPublicRepositories: [{ value: '', disabled: true }],
      fcStars: [{ value: '', disabled: true }],
      fcWatchers: [{ value: '', disabled: true }],
      fcForks: [{ value: '', disabled: true }]
    });
  }

  setDistinctLanguage() {
    this.distinctArray = this.languages.filter((value, index, self) => self.map(x => x.language).indexOf(value.language) == index);
  }

  sortDistinctArrayByPercentage() {
    this.distinctArray = this.distinctArray.sort((a, b) => {
      if (a.percentage < b.percentage) {
        return 1;
      }
      if (a.percentage > b.percentage) {
        return -1;
      }
      return 0;
    });
  }

  setQtyAndPercentageLanguage() {
    this.distinctArray.forEach((e) => {
      let qty = this.languages.filter(x => x.language === e.language).length;
      e.count = qty;
      e.percentage = `${((qty / this.languages.length) * 100).toFixed(2)}%`;
    });
  }

  separatePages() {
    this.githubuser = this.userReposLib[0] as GitHubUser;
    this.repositories = this.userReposLib[1] as GitHubRepository[];
  }

  setValueOnFormFields() {
    this.formGroup.setValue({
      fcFollowers: this.githubuser.followers,
      fcPublicRepositories: this.githubuser.public_repos,
      fcStars: this.stars,
      fcWatchers: this.watchers,
      fcForks: this.forks,
    })
  }

  getRepositoryInfos() {

    this.repositories.forEach((e) => {

      this.stars += e.stargazers_count;
      this.watchers += e.watchers_count;
      this.forks += e.forks_count;

      this.setLanguageInfo(e);

    });
  }

  setLanguageInfo(gitHubRepository: GitHubRepository) {
    this.languages.push({
      language: gitHubRepository.language,
      count: 0,
      percentage: '',
    });

  }

  goBack() {
    this.sendToPreviouPage.emit(true);
  }

  editGihubUser() {
    debugger

    const note = this.noteGithubUserComponent.formNote.get('fcNotes')?.value;

    this.dialog.open(GithubuserEditDialogComponent, {
      data: { userId: this.githubuser.id, note }
    })
  }

}
