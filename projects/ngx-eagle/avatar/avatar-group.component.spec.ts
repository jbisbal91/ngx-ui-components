import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarGroupComponent } from './avatar-group.component';

describe('AvatarGroupComponent', () => {
  let component: AvatarGroupComponent;
  let fixture: ComponentFixture<AvatarGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarGroupComponent]
    });
    fixture = TestBed.createComponent(AvatarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
