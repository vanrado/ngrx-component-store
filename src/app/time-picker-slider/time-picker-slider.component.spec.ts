import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerSliderComponent } from './time-picker-slider.component';

describe('TimePickerSliderComponent', () => {
  let component: TimePickerSliderComponent;
  let fixture: ComponentFixture<TimePickerSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimePickerSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePickerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
