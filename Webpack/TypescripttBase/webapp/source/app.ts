import * as _ from "lodash";

export class Application{
    constructor(){
        
        this.consoleIt('Application started. Alert comes from a constructor');
        this.consoleIt('Lodash loaded : '+typeof _);
        
    }

    private consoleIt(obj:any){
        let div = document.querySelector('.container');
        if(!div){
            div = document.createElement('div');
            div.className = "container";    
            document.body.appendChild(div);        
        }
        div.insertAdjacentHTML('beforeend',`<hr/><small>${obj}</small>`);
    }

    
}

const a = new Application();

