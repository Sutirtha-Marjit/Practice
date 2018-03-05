import {NgModule} from '@angular/core';
import {Route,Router,RouterModule} from '@angular/router';
import {VendorComponent} from './vendor.component';

const vendorRouteArray:Array<Route> = [
   {path:'welcome',component:VendorComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(vendorRouteArray)
    ],
    exports:[RouterModule],
    declarations:[VendorComponent],
    providers:[],

})export class VendorRoutingModule{

}