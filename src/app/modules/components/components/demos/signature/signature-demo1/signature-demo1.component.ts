import { Component } from '@angular/core';

@Component({
  selector: 'app-signature-demo1',
  templateUrl: './signature-demo1.component.html',
  styleUrls: ['./signature-demo1.component.scss']
})
export class SignatureDemo1Component {
  pointerColor: string = '#000000';

  _signatureComplete(signature: string) {
    console.log(signature);
  }
}
