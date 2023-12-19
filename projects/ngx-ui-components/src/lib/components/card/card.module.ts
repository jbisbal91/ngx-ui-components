import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { CardActionsComponent } from './components/card-actions/card-actions.component';
import { CardAvatarDirective } from './directives/card-avatar.directive';
import { CardImageDirective } from './directives/card-image.directive';

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardActionsComponent,
    CardAvatarDirective,
    CardImageDirective,
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardActionsComponent,
    CardAvatarDirective,
    CardImageDirective,
  ],
  imports: [CommonModule],
})
export class CardModule {}
