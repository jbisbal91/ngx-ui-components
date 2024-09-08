import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureDemo1Component } from './signature-demo1.component';

describe('SignatureDemo1Component', () => {
  let component: SignatureDemo1Component;
  let fixture: ComponentFixture<SignatureDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignatureDemo1Component]
    });
    fixture = TestBed.createComponent(SignatureDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
