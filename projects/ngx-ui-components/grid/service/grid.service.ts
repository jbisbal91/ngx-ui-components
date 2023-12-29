import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  private ngxSpan = new BehaviorSubject<number>(24);
  public ngxSpan$ = this.ngxSpan.asObservable();

  constructor() {}

  setNgxSpan(ngxSpan: any) {
    this.ngxSpan.next(ngxSpan);
  }
}
