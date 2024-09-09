import { Component, OnInit } from '@angular/core';
import { RangeDate } from 'ngx-eagle/datepicker';

@Component({
  selector: 'app-datepicker-demo1',
  templateUrl: './datepicker-demo1.component.html',
  styleUrls: ['./datepicker-demo1.component.scss']
})
export class DatepickerDemo1Component implements OnInit {
  range: RangeDate = { startDate: new Date(), endDate: new Date() };
  format = 'dd/MM/yyyy';
  rangeChange(range: RangeDate) {
    console.log(range);
  }

  ngOnInit(): void {
    this.initializeRange();
  }

  initializeRange() {
    const today = new Date();
    const startOfWeek = new Date(today);
    const endOfWeek = new Date(today);
    // Calculate start and end of the week
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday
    endOfWeek.setDate(today.getDate() + (6 - today.getDay())); // Saturday
    this.range = {
      startDate: startOfWeek,
      endDate: endOfWeek
    };
  }
}
