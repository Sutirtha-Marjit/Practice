import { NgModule } from '@angular/core';
import {Route,RouterModule} from '@angular/router';
import {HelpComponent} from './help.component';
import {WelcomeComponent} from './welcome.component';



const appRouteArray:Array<Route> =[
    {
        path:'help',
        component:HelpComponent
    },
    {
       path:'business',
       loadChildren: 'app/business/business.module#BusinessModule' 
    },    
    {
       path:'vendor',
       loadChildren: 'app/vendor/vendor.module#VendorModule' 
    },
    {
        path:'welcome',
        component:WelcomeComponent
    },
    {
        path:'',
        component:WelcomeComponent
    },
    
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRouteArray,{enableTracing:false})        
    ],
    declarations:[],
    providers:[],
    exports:[RouterModule]
})export class AppRoutingModule{

    constructor(){
        console.log('AppRoutingModule instantiated at '+new Date());
    }
}


