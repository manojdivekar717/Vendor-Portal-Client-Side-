import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingvendorverificationComponent } from './pendingvendorverification.component';

describe('PendingvendorverificationComponent', () => {
  let component: PendingvendorverificationComponent;
  let fixture: ComponentFixture<PendingvendorverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingvendorverificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingvendorverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
