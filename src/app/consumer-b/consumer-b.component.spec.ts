import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerBComponent } from './consumer-b.component';

describe('ConsumerBComponent', () => {
  let component: ConsumerBComponent;
  let fixture: ComponentFixture<ConsumerBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
