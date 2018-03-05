import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HelpComponent} from './help.component';
import {WelcomeComponent} from './welcome.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
