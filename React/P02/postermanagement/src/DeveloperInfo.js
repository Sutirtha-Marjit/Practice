export class DeveloperInfo{

    constructor(){
        console.log('Developer instantiated');
    }

    getDetails(){
        return {
            name:'Sutirtha Marjit',
            dob:new Date('11-20-1981')
        }
    }

}