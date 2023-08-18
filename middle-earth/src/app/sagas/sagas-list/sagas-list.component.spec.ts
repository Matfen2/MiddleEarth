import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagasListComponent } from './sagas-list.component';

describe('SagasListComponent', () => {
  let component: SagasListComponent;
  let fixture: ComponentFixture<SagasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SagasListComponent]
    });
    fixture = TestBed.createComponent(SagasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
