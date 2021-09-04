import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectHeadComponent } from './add-project-head.component';

describe('AddProjectHeadComponent', () => {
  let component: AddProjectHeadComponent;
  let fixture: ComponentFixture<AddProjectHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
