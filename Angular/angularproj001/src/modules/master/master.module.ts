import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MasterComponent} from './master.component';


@NgModule({
  declarations: [
    MasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})

export class MasterModule{
    constructor(){
       console.log(BrowserModule);
        
    }
}