import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovielandIamPage } from './movieland-iam.page';

describe('MovielandIamPage', () => {
  let component: MovielandIamPage;
  let fixture: ComponentFixture<MovielandIamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovielandIamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
