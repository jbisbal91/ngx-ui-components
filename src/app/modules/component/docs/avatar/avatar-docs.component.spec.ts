import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDocsComponent } from './avatar-docs.component';

describe('AvatarComponent', () => {
  let component: AvatarDocsComponent;
  let fixture: ComponentFixture<AvatarDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarDocsComponent]
    });
    fixture = TestBed.createComponent(AvatarDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
