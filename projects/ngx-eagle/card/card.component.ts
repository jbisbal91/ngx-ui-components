import { Component } from '@angular/core';

@Component({
  selector: 'ngx-card',
  templateUrl: './card.component.html',
  host: {
    class: 'ngx-card',
  },
  standalone: true,
})
export class CardComponent {}