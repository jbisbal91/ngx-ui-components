import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDocsComponent } from './input-docs.component';

describe('InputDocsComponent', () => {
  let component: InputDocsComponent;
  let fixture: ComponentFixture<InputDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputDocsComponent]
    });
    fixture = TestBed.createComponent(InputDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
