import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerDocsComponent } from './drawer-docs.component';

describe('DrawerDocsComponent', () => {
  let component: DrawerDocsComponent;
  let fixture: ComponentFixture<DrawerDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerDocsComponent]
    });
    fixture = TestBed.createComponent(DrawerDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
