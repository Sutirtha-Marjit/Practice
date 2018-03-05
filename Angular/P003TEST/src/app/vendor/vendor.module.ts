import{ NgModule } from '@angular/core';
import{VendorComponent} from './vendor.component';
import {VendorRoutingModule} from './vendor-routing.module';

@NgModule({
  declarations:[VendorComponent],
  providers:[],
  imports:[VendorRoutingModule],
  exports:[]  
})export class VendorModule{
    
}