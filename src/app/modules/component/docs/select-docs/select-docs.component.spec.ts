import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDocsComponent } from './select-docs.component';

describe('SelectDocsComponent', () => {
  let component: SelectDocsComponent;
  let fixture: ComponentFixture<SelectDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectDocsComponent]
    });
    fixture = TestBed.createComponent(SelectDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
