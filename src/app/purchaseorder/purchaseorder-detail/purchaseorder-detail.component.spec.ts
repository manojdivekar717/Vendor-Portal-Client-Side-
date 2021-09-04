import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorderDetailComponent } from './purchaseorder-detail.component';

describe('PurchaseorderDetailComponent', () => {
  let component: PurchaseorderDetailComponent;
  let fixture: ComponentFixture<PurchaseorderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseorderDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseorderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
