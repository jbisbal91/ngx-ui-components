import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InputService {

  private currentLabel = new BehaviorSubject<string>('');
  public currentLabel$ = this.currentLabel.asObservable();

  private currentValue = new BehaviorSubject<string>('');
  public currentValue$ = this.currentValue.asObservable();

  private inputFocus = new BehaviorSubject<boolean>(false);
  public inputFocus$ = this.inputFocus.asObservable();

  constructor() {}

  setCurrentValue(currentValue: string) {
    this.currentValue.next(currentValue);
  }

  setCurrentLabel(currentLabel: string) {
    this.currentLabel.next(currentLabel);
  }

  setFocus(isFocus: boolean) {
    this.inputFocus.next(isFocus);
  }


}
