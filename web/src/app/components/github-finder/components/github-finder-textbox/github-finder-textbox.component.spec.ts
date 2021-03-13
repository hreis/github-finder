import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFinderTextboxComponent } from './github-finder-textbox.component';

describe('GithubFinderTextboxComponent', () => {
  let component: GithubFinderTextboxComponent;
  let fixture: ComponentFixture<GithubFinderTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubFinderTextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFinderTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
