import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagasDetailsComponent } from './sagas-details.component';

describe('SagasDetailsComponent', () => {
  let component: SagasDetailsComponent;
  let fixture: ComponentFixture<SagasDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SagasDetailsComponent]
    });
    fixture = TestBed.createComponent(SagasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
