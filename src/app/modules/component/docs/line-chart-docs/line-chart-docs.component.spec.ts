import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartDocsComponent } from './line-chart-docs.component';

describe('LineChartDocsComponent', () => {
  let component: LineChartDocsComponent;
  let fixture: ComponentFixture<LineChartDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineChartDocsComponent]
    });
    fixture = TestBed.createComponent(LineChartDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
