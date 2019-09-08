require('../less/main.less');
class Application{
    constructor(){
        this.init();
    }

    init(){
        const masterDIV = document.createElement('div');
        masterDIV.innerHTML = '<p class="testdiv">Hello!</p>';
        document.body.appendChild(masterDIV);
    }
}

const app = new Application();

