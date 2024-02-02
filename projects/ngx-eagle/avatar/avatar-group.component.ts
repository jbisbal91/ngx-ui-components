import {
  AfterContentInit,
  ChangeDetectorRef,
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
export class AvatarGroupComponent implements AfterContentInit {
  @Input() maxVisibleAvatars: number | null = null;

  @ContentChildren(AvatarComponent)
  public avatars!: QueryList<AvatarComponent>;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterContentInit(): void {
    this.updateVisibleAvatars();
    this.cdr.markForCheck();
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

    if (
      this.maxVisibleAvatars &&
      this.avatars.length - this.maxVisibleAvatars > 0
    ) {
      this.createNodeOverflow(this.avatars.length - this.maxVisibleAvatars);
    }
  }

  createNodeOverflow(overflow: number) {
    const ngxSize = this.avatars.first.ngxSize;
    const nodeOverflow = document.createElement('div');
    nodeOverflow.classList.add('ngx-avatar');
    nodeOverflow.classList.add('ngx-avatar-circle');
    nodeOverflow.innerText = `+${overflow}`;
    this.setSizeNodeOverflow(nodeOverflow, ngxSize);
    this.elementRef.nativeElement.appendChild(nodeOverflow);
  }

  setSizeNodeOverflow(nodeOverflow: any, ngxSize: any) {
    if (typeof ngxSize === 'string') {
      switch (ngxSize) {
        case 'small':
          nodeOverflow.classList.add('ngx-avatar-sm');
          break;
        case 'default':
          nodeOverflow.classList.add('ngx-avatar-df');
          break;
        case 'large':
          nodeOverflow.classList.add('ngx-avatar-lg');
          break;
      }
    }

    if (typeof ngxSize === 'number') {
      const size = Number(ngxSize) / 16 + 'rem';
      this.renderer.setStyle(nodeOverflow, 'width', size);
      this.renderer.setStyle(nodeOverflow, 'height', size);
      this.renderer.setStyle(nodeOverflow, 'line-height', size);
    }
  }
}
