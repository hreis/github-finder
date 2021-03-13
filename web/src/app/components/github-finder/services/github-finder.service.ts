import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GitHubRepository } from '../model/githubRepository';
import { GitHubUser } from '../model/githubUser';

@Injectable({
  providedIn: 'root'
})
export class GithubFinderService {

  constructor(private http: HttpClient) { }

  getGithubUser(username: string): Observable<GitHubUser> {

    return this.http.post<GitHubUser>
    (`${environment.apiUrl}/githubinfo/getGitHubUser`, { username })
    .pipe(distinctUntilChanged())
      // .pipe(pluck('data'));

  }

  getGithubRepositoriesByUser(username: string): Observable<GitHubRepository[]> {

    return this.http.post<GitHubRepository[]>
    (`${environment.apiUrl}/githubinfo/getGithubRepositories`, { username })
    .pipe(distinctUntilChanged())
      // .pipe(pluck('data'));

  }

  insertGithubNote(userId: number, note: string): Observable<boolean> {
    return this.http.post<boolean>
    (`${environment.apiUrl}/githubinfo/insertGithubNote`, { userId, note })
  }

  updateUserNoteById(userId: number, note: string): Observable<boolean> {

    return this.http.post<boolean>
    (`${environment.apiUrl}/githubinfo/insertGithubNote`, { userId, note })

  }

}
