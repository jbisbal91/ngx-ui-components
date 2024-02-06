import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressDemo1Component } from './progress-demo1.component';

describe('ProgressDemo1Component', () => {
  let component: ProgressDemo1Component;
  let fixture: ComponentFixture<ProgressDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressDemo1Component]
    });
    fixture = TestBed.createComponent(ProgressDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
