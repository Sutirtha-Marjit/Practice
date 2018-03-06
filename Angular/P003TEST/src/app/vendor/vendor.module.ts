import{ NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{VendorComponent} from './vendor.component';
import {VendorRoutingModule} from './vendor-routing.module';

@NgModule({
  declarations:[VendorComponent],
  providers:[],
  imports:[CommonModule,VendorRoutingModule],
  exports:[]  
})export class VendorModule{
    
}