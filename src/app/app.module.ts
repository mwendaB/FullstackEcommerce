import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IconButtonStyleFilledStateComponent } from './components/page-1-tablet/icon-button-style-filled-state/icon-button-style-filled-state.component';
import { Icons1Component } from './components/page-1-tablet/icons1/icons1.component';
import { IconsSettings24pxComponent } from './components/page-1-tablet/icons-settings24px/icons-settings24px.component';
import { LeftIconButtonComponent } from './components/page-1-tablet/left-icon-button/left-icon-button.component';
import { Page1TabletComponent } from './components/page-1-tablet/page-1-tablet.component';
import { RightIconButtonComponent } from './components/page-1-tablet/right-icon-button/right-icon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    IconsSettings24pxComponent,
    IconButtonStyleFilledStateComponent,
    LeftIconButtonComponent,
    RightIconButtonComponent,
    Icons1Component,
    Page1TabletComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
