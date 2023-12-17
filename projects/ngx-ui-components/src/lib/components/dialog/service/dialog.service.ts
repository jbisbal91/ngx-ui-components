import { Injectable } from '@angular/core';
import { Observable, Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private requestSub = new Subject<{
    text: string;
    title: string;
    responseSub: Subject<boolean>;
  }>();
  public modalRequested = this.requestSub.asObservable();
  constructor() {}

  openModal(title: string, text: string): Observable<boolean> {
    console.log(`ModalService requesting modal: ${JSON.stringify({ text })}`);
    const responseSub = new Subject<boolean>();
    this.requestSub.next({ text, title, responseSub });
    return responseSub.pipe(take(1));
  }
}
