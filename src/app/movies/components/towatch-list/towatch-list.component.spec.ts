import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowatchListComponent } from './towatch-list.component';

describe('TowatchListComponent', () => {
  let component: TowatchListComponent;
  let fixture: ComponentFixture<TowatchListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowatchListComponent]
    });
    fixture = TestBed.createComponent(TowatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
