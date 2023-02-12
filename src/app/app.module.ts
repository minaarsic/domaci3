import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UslugeComponent } from './usluge/usluge.component';
import { ClickOutsideDirectiveDirective } from './click-outside.directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    UslugeComponent,
    ClickOutsideDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
