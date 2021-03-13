import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteGithubUserComponent } from './note-github-user.component';

describe('NoteGithubUserComponent', () => {
  let component: NoteGithubUserComponent;
  let fixture: ComponentFixture<NoteGithubUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteGithubUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteGithubUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
