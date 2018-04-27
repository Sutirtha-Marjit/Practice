
import AccurateTest from './accurate.test';
class CommonTest{

    constructor(){
        console.log('CommonTest');
        if(AccurateTest){
            console.dir(typeof AccurateTest);
            console.dir(typeof AccurateTest);
            this.acc = new AccurateTest();
        }
        
    }

    pool(){
        console.log('Pool');
    }

}

let d = new CommonTest();


