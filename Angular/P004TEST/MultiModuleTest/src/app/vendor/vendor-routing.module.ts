
import {NgModule} from '@angular/core';
import {Route,RouterModule} from '@angular/router';
import {VendorDashBoardComponent} from './vendor-dash-board/vendor-dash-board.component';

const vendorRouteArray:Array<Route> = [
   {path:'',component:VendorDashBoardComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(vendorRouteArray)
    ],
    exports:[RouterModule]    

})export class VendorRoutingModule{

}