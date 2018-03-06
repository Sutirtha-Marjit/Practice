import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessFundManagementComponent } from './business-fund-management/business-fund-management.component';




const routes: Routes = [
  	{
    path:'',
    component:BusinessListComponent,
    },    
    {
    path:'fund',
    component: BusinessFundManagementComponent
    }	
];




@NgModule({
  
	imports: [RouterModule.forChild(routes)],  
	exports: [RouterModule]
})
export class BusinessRoutingModule {


 }
