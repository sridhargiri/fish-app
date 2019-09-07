import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishProfileComponent } from './fish-profile.component';

describe('FishProfileComponent', () => {
  let component: FishProfileComponent;
  let fixture: ComponentFixture<FishProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
