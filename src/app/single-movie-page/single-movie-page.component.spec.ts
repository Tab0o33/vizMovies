import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMoviePageComponent } from './single-movie-page.component';

describe('SingleMoviePageComponent', () => {
  let component: SingleMoviePageComponent;
  let fixture: ComponentFixture<SingleMoviePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleMoviePageComponent]
    });
    fixture = TestBed.createComponent(SingleMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
