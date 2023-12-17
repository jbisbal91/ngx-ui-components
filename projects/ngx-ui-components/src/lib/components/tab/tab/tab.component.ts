import { Component, Input } from '@angular/core';
import { Tab } from './tab.interface';

@Component({
  selector: 'ngx-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements Tab {
  
  @Input() label: string = '';
  public isActive: boolean = false;
  @Input() disabled: boolean = false;
}
