import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveGrnComponent } from './approve-grn.component';

describe('ApproveGrnComponent', () => {
  let component: ApproveGrnComponent;
  let fixture: ComponentFixture<ApproveGrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveGrnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveGrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
