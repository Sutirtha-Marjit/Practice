 export const AuthenticationService = {

    validate:(givenPassCode,success,fail)=>{
        givenPassCode = parseInt(givenPassCode,10);
        if(givenPassCode === 9324){
            success();
        }else{
            fail();
        }       
    }
}

