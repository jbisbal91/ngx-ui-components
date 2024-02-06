import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateDocsComponent } from './rate-docs.component';

describe('RateDocsComponent', () => {
  let component: RateDocsComponent;
  let fixture: ComponentFixture<RateDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateDocsComponent]
    });
    fixture = TestBed.createComponent(RateDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
