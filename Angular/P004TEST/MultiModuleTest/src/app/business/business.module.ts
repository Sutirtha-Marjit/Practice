import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormControl } from '@angular/forms';
import { BusinessRoutingModule } from './business-routing.module';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessFundManagementComponent } from './business-fund-management/business-fund-management.component';



@NgModule({
  imports: [
    CommonModule,
    BusinessRoutingModule,
    FormsModule
  ],
  
	     declarations: [BusinessListComponent, BusinessFundManagementComponent]

	  })
export class BusinessModule {
	
	 
  constructor(){
	
    console.log('BusinessModule initiated');
  
	   }


}
