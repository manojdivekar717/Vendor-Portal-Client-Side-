import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpurchaseorderComponent } from './allpurchaseorder.component';

describe('AllpurchaseorderComponent', () => {
  let component: AllpurchaseorderComponent;
  let fixture: ComponentFixture<AllpurchaseorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpurchaseorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpurchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
