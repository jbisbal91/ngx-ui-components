import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDemo2Component } from './select-demo2.component';

describe('SelectDemo2Component', () => {
  let component: SelectDemo2Component;
  let fixture: ComponentFixture<SelectDemo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectDemo2Component]
    });
    fixture = TestBed.createComponent(SelectDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
