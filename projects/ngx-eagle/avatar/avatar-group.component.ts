import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnChanges,
  QueryList,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { AvatarComponent } from './avatar.component';

@Component({
  selector: 'ngx-avatar-group',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'ngx-avatar-group',
  },
  standalone:true
})
export class AvatarGroupComponent implements OnChanges, AfterViewInit {
  @Input() maxVisibleAvatars: number = 0;

  @ContentChildren(AvatarComponent)
  public avatars!: QueryList<AvatarComponent>;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['maxVisibleAvatars'] && this.avatars) {
      this.addAvatar();
    }
  }

  ngAfterViewInit(): void {
    //this.updateVisibleAvatars();
  }

  private addAvatar(): void {
    
  }
}
