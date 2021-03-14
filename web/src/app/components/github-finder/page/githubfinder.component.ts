import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, concatMap, finalize, map, switchMap, tap } from 'rxjs/operators';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { GitHubRepository } from '../model/githubRepository';
import { GitHubUser } from '../model/githubUser';
import { GithubFinderService } from '../services/github-finder.service';

@Component({
  selector: 'app-githubfinder',
  templateUrl: './githubfinder.component.html',
  styleUrls: ['./githubfinder.component.scss']
})
export class GithubfinderComponent implements OnInit {

  userReposLib$: Observable<(GitHubUser | GitHubRepository[])[]>;
  loading: boolean = false;
  success: boolean = false;

  constructor(private githubFinderService: GithubFinderService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  formHasBeenSubmited(username: string) {

    this.loading = !this.loading;
    this.success = !this.success;
    this.getGithubUser(username);
    
  }

  getGithubUser(username: string) {
    this.userReposLib$ = this.githubFinderService.getGithubUser(username)
    .pipe(
      concatMap(
        repositories => this.githubFinderService.
          getGithubRepositoriesByUser(username)
          .pipe(map(user => [repositories, user])
          )),
      finalize(() => {
        this.loading = !this.loading;
      }),
      catchError((err: HttpErrorResponse) => {
        this.success = !this.success;

        if (err.status === 404) this.notificationService.alert('Github user was not found.');
        else this.notificationService.error(err.error.message);

        throw new Error(err.message);
      }));
  }

  previouPage() {
    this.success = !this.success;
  }

  refreshPage(username: string) {
    this.success = !this.success;
    this.formHasBeenSubmited(username);
  }

}
