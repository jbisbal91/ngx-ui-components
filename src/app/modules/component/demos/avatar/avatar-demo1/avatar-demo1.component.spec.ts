import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDemo1Component } from './avatar-demo1.component';

describe('AvatarDemo1Component', () => {
  let component: AvatarDemo1Component;
  let fixture: ComponentFixture<AvatarDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarDemo1Component]
    });
    fixture = TestBed.createComponent(AvatarDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
