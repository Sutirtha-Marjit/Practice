import { Component } from '@angular/core';

@Component({
    templateUrl:'./help.component.html',
    styleUrls:['./help.component.css'],
    selector:'app-help'
})export class HelpComponent{

    constructor(){
        console.log('HelpComponent created on '+new Date());
    }
}