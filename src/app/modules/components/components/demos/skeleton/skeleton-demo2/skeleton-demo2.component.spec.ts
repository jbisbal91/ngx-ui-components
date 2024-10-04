import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonDemo2Component } from './skeleton-demo2.component';

describe('SkeletonDemo2Component', () => {
  let component: SkeletonDemo2Component;
  let fixture: ComponentFixture<SkeletonDemo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonDemo2Component]
    });
    fixture = TestBed.createComponent(SkeletonDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
