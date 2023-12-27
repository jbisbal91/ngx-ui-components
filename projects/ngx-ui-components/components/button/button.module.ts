import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockButtonDirective } from './block-button/block-button.directive';
import { ButtonDirective } from './button/button.directive';
import { DangerButtonDirective } from './danger-button/danger-button.directive';
import { GhostButtonDirective } from './ghost-button/ghost-button.directive';

const directives = [
  BlockButtonDirective,
  ButtonDirective,
  DangerButtonDirective,
  GhostButtonDirective
];

@NgModule({
  declarations: [directives],
  exports: [directives],
  imports: [CommonModule]
})
export class ButtonModule {}
