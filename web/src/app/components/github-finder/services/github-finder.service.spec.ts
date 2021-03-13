import { TestBed } from '@angular/core/testing';

import { GithubFinderService } from './github-finder.service';

describe('GithubFinderService', () => {
  let service: GithubFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
