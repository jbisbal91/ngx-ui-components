import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  ngxSpan = 0;

  constructor() {}

  setNgxSpan(ngxSpan: number) {
    this.ngxSpan = ngxSpan;
  }
}
