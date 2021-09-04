import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishpoliciesComponent } from './publishpolicies.component';

describe('PublishpoliciesComponent', () => {
  let component: PublishpoliciesComponent;
  let fixture: ComponentFixture<PublishpoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishpoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishpoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
