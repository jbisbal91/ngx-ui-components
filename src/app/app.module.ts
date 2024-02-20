import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ComponentModule } from './modules/component/component.module';
import { NgxDialog } from 'ngx-eagle/dialog';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ComponentModule,
  ],
  providers: [NgxDialog],
  bootstrap: [AppComponent],
})
export class AppModule {}
