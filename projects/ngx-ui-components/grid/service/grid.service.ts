import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  private ngxGutter = new BehaviorSubject<number>(0);
  public ngxGutter$ = this.ngxGutter.asObservable();

  constructor() {}

  setNgxGutter(ngxGutter: number) {
    this.ngxGutter.next(ngxGutter);
  }
}
