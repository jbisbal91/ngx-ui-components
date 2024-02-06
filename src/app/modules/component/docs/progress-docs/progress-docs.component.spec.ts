import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressDocsComponent } from './progress-docs.component';

describe('ProgressDocsComponent', () => {
  let component: ProgressDocsComponent;
  let fixture: ComponentFixture<ProgressDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressDocsComponent]
    });
    fixture = TestBed.createComponent(ProgressDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
