import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishCamComponent } from './fish-cam.component';

describe('FishCamComponent', () => {
  let component: FishCamComponent;
  let fixture: ComponentFixture<FishCamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishCamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishCamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
