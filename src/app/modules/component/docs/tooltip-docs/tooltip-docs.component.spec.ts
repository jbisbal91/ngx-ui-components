import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDocsComponent } from './tooltip-docs.component';

describe('TooltipDocsComponent', () => {
  let component: TooltipDocsComponent;
  let fixture: ComponentFixture<TooltipDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipDocsComponent]
    });
    fixture = TestBed.createComponent(TooltipDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
