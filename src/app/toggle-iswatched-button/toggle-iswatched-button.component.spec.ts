import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleIswatchedButtonComponent } from './toggle-iswatched-button.component';

describe('ToggleIswatchedButtonComponent', () => {
  let component: ToggleIswatchedButtonComponent;
  let fixture: ComponentFixture<ToggleIswatchedButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleIswatchedButtonComponent]
    });
    fixture = TestBed.createComponent(ToggleIswatchedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
