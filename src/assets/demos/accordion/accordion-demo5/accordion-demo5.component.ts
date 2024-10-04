import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-demo5',
  templateUrl: './accordion-demo5.component.html',
  styleUrls: ['./accordion-demo5.component.scss'],
})
export class AccordionDemo5Component {
  onClick(event: any) {
    console.log(event);
  }
}
