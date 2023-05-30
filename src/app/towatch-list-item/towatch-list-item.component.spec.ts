import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowatchListItemComponent } from './towatch-list-item.component';

describe('TowatchListItemComponent', () => {
  let component: TowatchListItemComponent;
  let fixture: ComponentFixture<TowatchListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowatchListItemComponent]
    });
    fixture = TestBed.createComponent(TowatchListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
