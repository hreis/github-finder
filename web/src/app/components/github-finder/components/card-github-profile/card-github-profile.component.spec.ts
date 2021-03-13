import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGithubProfileComponent } from './card-github-profile.component';

describe('CardGithubProfileComponent', () => {
  let component: CardGithubProfileComponent;
  let fixture: ComponentFixture<CardGithubProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGithubProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGithubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
