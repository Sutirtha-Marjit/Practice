/*import{ NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VendorRoutingModule} from './vendor-routing.module';
import { VendorDashBoardComponent } from './vendor-dash-board/vendor-dash-board.component';


@NgModule({
  declarations:[VendorDashBoardComponent],
  imports:[CommonModule,VendorRoutingModule]    
})export class VendorModule{
    
}*/


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorRoutingModule } from './vendor-routing.module';
import { VendorDashBoardComponent } from './vendor-dash-board/vendor-dash-board.component';



@NgModule({
  imports: [
    CommonModule,
    VendorRoutingModule
  ],  
	     declarations: [VendorDashBoardComponent]

	  })
export class VendorModule {
	
	 
  constructor(){
	
    console.log('VendorModule initiated');
  
	   }


}
