import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngx-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() title = '';
  @Input() text = '';
  private answeredSub = new Subject<boolean>();
  answered$ = this.answeredSub.asObservable();
  constructor() {}

  protected answerModal(confirmed: boolean) {
    console.log('ModalComponent answerModal', confirmed);
    this.answeredSub.next(confirmed);
  }

  ngOnDestroy() {
    // causes complete before childComponent recieves 'next'
    // this.answeredSub.complete();
  }
}
