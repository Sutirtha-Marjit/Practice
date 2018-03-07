import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorRoutingModule } from './vendor-routing.module';
import { VendorDashBoardComponent } from './vendor-dash-board/vendor-dash-board.component';
import {FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    VendorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],  
       declarations: [VendorDashBoardComponent],
       providers:[FormBuilder]

	  })
export class VendorModule {
	
	 
  constructor(){
	
    console.log('VendorModule initiated');
  
	   }


}
