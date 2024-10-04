import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonDemo3Component } from './skeleton-demo3.component';

describe('SkeletonDemo3Component', () => {
  let component: SkeletonDemo3Component;
  let fixture: ComponentFixture<SkeletonDemo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonDemo3Component]
    });
    fixture = TestBed.createComponent(SkeletonDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
