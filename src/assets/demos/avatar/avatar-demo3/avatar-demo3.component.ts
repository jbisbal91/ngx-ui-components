import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar-demo3',
  templateUrl: './avatar-demo3.component.html',
  styleUrls: ['./avatar-demo3.component.scss'],
})
export class AvatarDemo3Component {
  users: { name: string; picture: string }[] = [
    { name: '', picture: '' },
    { name: 'Emily Thompson', picture: '' },
    { name: 'Robert Davis', picture: '/assets/images/avatar/man.png' },
    { name: 'John Doe', picture: '' },
    { name: 'Michael Chen', picture: '' },
    { name: 'Pierre Dubois', picture: '' },
    { name: 'Daniel Miller', picture: '' },
    { name: 'Miguel Hernández', picture: '' },
  ];
}
