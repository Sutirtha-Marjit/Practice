function Person(){
    var base = this;
    base.config = arguments[0];
    base.configDone = false;

    base.configurePersonObject = function(){
        
        if(!base.configDone){
            if(base.config){
                base.config.dor = new Date();
            }else{
                base.config = {
                    name : "",
                    empCode: "000-000-000",
                    dob:null,
                    doj:null,
                    dor:new Date()
                };
            }
        }

        base.configDone = true;
    };
    



    base.getCurrentConfigObject = function(){
        base.configurePersonObject();
        return base.config;
    };

    let init = function(){
       base.configurePersonObject(); 
    };

    init();
    

}