import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartDemo1Component } from './line-chart-demo1.component';

describe('LineChartDemo1Component', () => {
  let component: LineChartDemo1Component;
  let fixture: ComponentFixture<LineChartDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineChartDemo1Component]
    });
    fixture = TestBed.createComponent(LineChartDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
