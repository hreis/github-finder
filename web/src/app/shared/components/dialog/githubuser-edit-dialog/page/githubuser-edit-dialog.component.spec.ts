import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubuserEditDialogComponent } from './githubuser-edit-dialog.component';

describe('GithubuserEditDialogComponent', () => {
  let component: GithubuserEditDialogComponent;
  let fixture: ComponentFixture<GithubuserEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubuserEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubuserEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
