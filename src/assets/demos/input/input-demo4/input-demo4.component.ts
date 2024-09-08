import { Component } from '@angular/core';

@Component({
  selector: 'app-input-demo4',
  templateUrl: './input-demo4.component.html',
  styleUrls: ['./input-demo4.component.scss'],
})
export class InputDemo4Component {
  searhValue: string = '';

  onSearh(value:string){
    console.log(value);
  }
}
