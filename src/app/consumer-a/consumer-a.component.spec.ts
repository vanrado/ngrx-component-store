import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerAComponent } from './consumer-a.component';

describe('ConsumerAComponent', () => {
  let component: ConsumerAComponent;
  let fixture: ComponentFixture<ConsumerAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
