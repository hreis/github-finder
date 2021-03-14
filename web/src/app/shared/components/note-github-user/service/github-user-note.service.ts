import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GitHubUserNote } from '../model/githubUserNote';

@Injectable({
  providedIn: 'root'
})
export class GithubUserNoteService {

  constructor(private http: HttpClient) { }
  
  getUserNoteById(userId: number): Observable<GitHubUserNote> {

    return this.http.post<GitHubUserNote>
    (`${environment.apiUrl}/githubinfo/getUserNoteById`, { userId })
    .pipe(distinctUntilChanged())

  }
}
