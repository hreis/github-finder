import { TestBed } from '@angular/core/testing';

import { GithubUserNoteService } from './github-user-note.service';

describe('GithubUserNoteService', () => {
  let service: GithubUserNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubUserNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
