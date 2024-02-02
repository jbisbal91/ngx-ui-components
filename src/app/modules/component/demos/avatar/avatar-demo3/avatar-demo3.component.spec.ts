import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDemo3Component } from './avatar-demo3.component';

describe('AvatarDemo3Component', () => {
  let component: AvatarDemo3Component;
  let fixture: ComponentFixture<AvatarDemo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarDemo3Component]
    });
    fixture = TestBed.createComponent(AvatarDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
