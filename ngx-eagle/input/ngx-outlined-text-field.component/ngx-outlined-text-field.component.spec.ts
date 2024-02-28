import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOutlinedTextFieldComponent } from './ngx-outlined-text-field.component';

describe('NgxOutlinedTextFieldComponent', () => {
  let component: NgxOutlinedTextFieldComponent;
  let fixture: ComponentFixture<NgxOutlinedTextFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxOutlinedTextFieldComponent]
    });
    fixture = TestBed.createComponent(NgxOutlinedTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
