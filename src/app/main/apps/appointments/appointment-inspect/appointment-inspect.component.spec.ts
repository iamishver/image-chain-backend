import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentInspectComponent } from './appointment-inspect.component';

describe('AppointmentInspectComponent', () => {
  let component: AppointmentInspectComponent;
  let fixture: ComponentFixture<AppointmentInspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentInspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentInspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
