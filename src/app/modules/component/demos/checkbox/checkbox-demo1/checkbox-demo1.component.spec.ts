import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDemo1Component } from './checkbox-demo1.component';

describe('CheckboxDemo1Component', () => {
  let component: CheckboxDemo1Component;
  let fixture: ComponentFixture<CheckboxDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxDemo1Component]
    });
    fixture = TestBed.createComponent(CheckboxDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
