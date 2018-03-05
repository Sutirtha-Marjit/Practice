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
       path:'vendor',
       loadChildren: 'app/vendor/vendor.module#VendorModule' 
    },
    {
        path:'',
        component:WelcomeComponent
    },
    
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRouteArray,{enableTracing:true})        
    ],
    declarations:[],
    providers:[],
    exports:[RouterModule]
})export class AppRoutingModule{

    constructor(){
        console.log('AppRoutingModule instantiated at '+new Date());
    }
}


