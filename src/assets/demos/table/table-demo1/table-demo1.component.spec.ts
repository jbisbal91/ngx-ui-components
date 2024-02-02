import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDemo1Component } from './table-demo1.component';

describe('TableDemo1Component', () => {
  let component: TableDemo1Component;
  let fixture: ComponentFixture<TableDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDemo1Component]
    });
    fixture = TestBed.createComponent(TableDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
