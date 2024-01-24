import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDemo1Component } from './select-demo1.component';

describe('SelectDemo1Component', () => {
  let component: SelectDemo1Component;
  let fixture: ComponentFixture<SelectDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectDemo1Component]
    });
    fixture = TestBed.createComponent(SelectDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
