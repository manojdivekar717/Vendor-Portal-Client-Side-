import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvendorsComponent } from './allvendors.component';

describe('AllvendorsComponent', () => {
  let component: AllvendorsComponent;
  let fixture: ComponentFixture<AllvendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllvendorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllvendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
