import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GlobalPropertyManagerService} from './services/global-property-manager.service';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import {HelpComponent} from './help.component';
import { CommonAlertComponent } from './common-alert/common-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    CommonAlertComponent,
    HelpComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GlobalPropertyManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
