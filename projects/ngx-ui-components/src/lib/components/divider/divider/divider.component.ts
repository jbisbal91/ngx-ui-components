import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {

  @Input() ngxText: string = '';

}
