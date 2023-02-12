import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClickOutsideDirectiveDirective } from './header/click-outside.directive.directive';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { HeaderComponent } from './header/header.component';
import { TagoviComponent } from './tagovi/tagovi.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { Tag } from './Tag';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirectiveDirective,
    PocetnaComponent,
    HeaderComponent,
    TagoviComponent,
    SearchComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
