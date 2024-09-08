import { Component } from '@angular/core';

@Component({
  selector: 'app-card-demo3',
  templateUrl: './card-demo3.component.html',
  styleUrls: ['./card-demo3.component.scss'],
})
export class CardDemo3Component {
  buttonColor: any = {
    backgroundColor: 'var(--ngx-test-background-color)',
    overlayColor: 'var(--ngx-test-overlay-color)',
  };
}
