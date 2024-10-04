import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-demo2',
  templateUrl: './tag-demo2.component.html',
  styleUrls: ['./tag-demo2.component.scss'],
})
export class TagDemo2Component {
  onClose(tag: string) {
    console.log('close', tag);
  }
  onCheckedChange(checked: boolean, tag: string) {
    console.log(tag, checked);
  }
}
