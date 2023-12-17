import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSidenavComponent } from './component-sidenav.component';

describe('ComponentSidenavComponent', () => {
  let component: ComponentSidenavComponent;
  let fixture: ComponentFixture<ComponentSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentSidenavComponent]
    });
    fixture = TestBed.createComponent(ComponentSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
