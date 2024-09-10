import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-loading',
  standalone: true,
  imports: [NgIf, NgFor],
  template: `
    <div *ngIf="!hidden" class="spinner" 
         [class.ngx-loading-sm]="size === 'sm'"
         [class.ngx-loading-md]="size === 'md'"
         [class.ngx-loading-lg]="size === 'lg'">
      <div class="spinner-bar" *ngFor="let _ of [].constructor(12); let i = index" 
           [style.transform]="'rotate(' + (i * 30) + 'deg)'"
           [style.animationDelay]="-1.1 + i * 0.1 + 's'"></div>
    </div>
  `,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() hidden: boolean = false;
}
