import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubfinderComponent } from './githubfinder.component';

describe('GithubfinderComponent', () => {
  let component: GithubfinderComponent;
  let fixture: ComponentFixture<GithubfinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubfinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
