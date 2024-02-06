import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerDemo1Component } from './drawer-demo1.component';

describe('DrawerDemo1Component', () => {
  let component: DrawerDemo1Component;
  let fixture: ComponentFixture<DrawerDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerDemo1Component]
    });
    fixture = TestBed.createComponent(DrawerDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
