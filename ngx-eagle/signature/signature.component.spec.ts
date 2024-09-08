import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CslSignatureComponent } from './signature.component';

describe('CslSignatureComponent', () => {
  let component: CslSignatureComponent;
  let fixture: ComponentFixture<CslSignatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CslSignatureComponent]
    });
    fixture = TestBed.createComponent(CslSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
