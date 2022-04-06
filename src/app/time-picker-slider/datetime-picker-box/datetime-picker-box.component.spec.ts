import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimePickerBoxComponent } from './datetime-picker-box.component';

describe('DatetimePickerBoxComponent', () => {
  let component: DatetimePickerBoxComponent;
  let fixture: ComponentFixture<DatetimePickerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatetimePickerBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimePickerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
