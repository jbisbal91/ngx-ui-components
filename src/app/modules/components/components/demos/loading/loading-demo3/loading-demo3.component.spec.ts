import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingDemo3Component } from './loading-demo3.component';

describe('LoadingDemo3Component', () => {
  let component: LoadingDemo3Component;
  let fixture: ComponentFixture<LoadingDemo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingDemo3Component]
    });
    fixture = TestBed.createComponent(LoadingDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
