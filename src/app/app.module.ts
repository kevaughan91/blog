import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CurrentBlogsComponent } from './current-blogs/current-blogs.component';

@NgModule({
  declarations: [
    AppComponent, CurrentBlogsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
