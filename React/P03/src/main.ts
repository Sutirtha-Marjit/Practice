import { init } from './components/app';
class Main{
    
    appName='';
    rootDIV:HTMLDivElement=null;
    constructor(){       
        this.loadDiv();
    }

    private loadDiv(){
        window.onload = ()=>{
            this.rootDIV = document.querySelector('.app-container');            
            init(this.rootDIV);
        }
    }


   
    
}

const m = new Main();

