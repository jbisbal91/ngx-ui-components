import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateDemo1Component } from './rate-demo1.component';

describe('RateDemo1Component', () => {
  let component: RateDemo1Component;
  let fixture: ComponentFixture<RateDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateDemo1Component]
    });
    fixture = TestBed.createComponent(RateDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
