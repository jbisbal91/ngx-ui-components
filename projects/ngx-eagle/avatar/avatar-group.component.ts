import {
  AfterContentInit,
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
  standalone: true,
})
export class AvatarGroupComponent implements OnChanges, AfterContentInit {
  @Input() maxVisibleAvatars: number | null = null;

  @ContentChildren(AvatarComponent)
  public avatars!: QueryList<AvatarComponent>;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['maxVisibleAvatars'] && this.avatars) {
      this.updateVisibleAvatars();
    }
  }

  ngAfterContentInit(): void {
    this.updateVisibleAvatars();
  }

  private updateVisibleAvatars(): void {
    const avatarArray = this.avatars.toArray();
    avatarArray.forEach((avatar, index) => {
      if (this.maxVisibleAvatars && index >= this.maxVisibleAvatars) {
        this.renderer.removeChild(
          this.elementRef.nativeElement,
          avatar.elementRef.nativeElement
        );
      }
    });
  }
}
