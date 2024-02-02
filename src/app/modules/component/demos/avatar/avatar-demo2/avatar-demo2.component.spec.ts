import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDemo2Component } from './avatar-demo2.component';

describe('AvatarDemo2Component', () => {
  let component: AvatarDemo2Component;
  let fixture: ComponentFixture<AvatarDemo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarDemo2Component]
    });
    fixture = TestBed.createComponent(AvatarDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
