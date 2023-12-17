import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DangerButtonDirective } from './danger-button/danger-button.directive';
import { NgxButtonDirective } from './ngx-button/ngx-button.directive';
import { BlockButtonDirective } from './block-button/block-button.directive';
import { GhostButtonDirective } from './ghost-button/ghost-button.directive';
import { SuccessButtonDirective } from './success-button/success-button.directive';

const directives = [NgxButtonDirective,SuccessButtonDirective, DangerButtonDirective, GhostButtonDirective, BlockButtonDirective]

@NgModule({
  declarations: [directives],
  exports: [directives],
  imports: [
    CommonModule
  ]
})
export class ButtonModule { }
