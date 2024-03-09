import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-option',
  templateUrl: './ngx-option.component.html',
  styleUrls: ['./ngx-option.component.scss'],
  standalone: true,
})
export class NgxOptionComponent {
  @Input() value: string | number = '';
}
