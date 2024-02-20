import { NgModule } from '@angular/core';
import { AvatarComponent } from './avatar.component';
import { AvatarGroupComponent } from './avatar-group.component';

@NgModule({
  exports: [AvatarGroupComponent, AvatarComponent],
  imports: [AvatarGroupComponent, AvatarComponent],
})
export class AvatarModule {}
