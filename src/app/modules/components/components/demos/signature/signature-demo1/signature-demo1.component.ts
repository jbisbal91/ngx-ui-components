import { Component } from '@angular/core';

@Component({
  selector: 'app-signature-demo1',
  templateUrl: './signature-demo1.component.html',
  styleUrls: ['./signature-demo1.component.scss']
})
export class SignatureDemo1Component {
  pointerColors: string[] = ['#000000', '#2A7CFF', '#d32029'];
  pointerColor: string = '#000000';
  signatureData!: string;

  signatureComplete(signature: any) {
    this.signatureData = signature;
  }
}
