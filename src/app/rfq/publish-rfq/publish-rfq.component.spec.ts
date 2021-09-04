import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishRFQComponent } from './publish-rfq.component';

describe('PublishRFQComponent', () => {
  let component: PublishRFQComponent;
  let fixture: ComponentFixture<PublishRFQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishRFQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishRFQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
