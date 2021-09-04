import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveinvoicesComponent } from './approveinvoices.component';

describe('ApproveinvoicesComponent', () => {
  let component: ApproveinvoicesComponent;
  let fixture: ComponentFixture<ApproveinvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveinvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
