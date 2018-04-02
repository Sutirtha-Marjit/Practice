import React from 'react';
import {Component} from 'react';
import {PassCodeCustomInput} from './PassCodeCustomInput';
import {AuthenticationService} from './Service/Authentication';


export class LoginForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            passcode:'',
            auth:false
        };

        this.keyrandomStart = parseInt(Math.random()*10000);
        this.keyboardPattern = "number" || props.pattern;
        this.patterns = {
            number:this.generateNaturalNumber(),
            character:this.getCharacters()
        };

        this.addToPasscode = this.addToPasscode.bind(this);
        this.cleanPassCode = this.cleanPassCode.bind(this);
        this.validatePass = this.validatePass.bind(this);

    }

    getCharacters(){
        let charArr=[];
        let capStart = 65;
        let smallStart = 97;

        for(let i=capStart;i<capStart+26;i++){
            charArr.push(String.fromCharCode(i));
        }

        for(let i=smallStart;i<smallStart+26;i++){
            charArr.push(String.fromCharCode(i));
        }

        return charArr;
    }

    generateNaturalNumber(){
        let numArr=[];
        for(let i=0;i<10;i++){
            numArr.push(i);
        }

        return numArr;
    }

    validatePass(){
        AuthenticationService.validate(this.state.passcode,()=>{
            
            if(this.props.onLoginConfirmed){
                this.props.onLoginConfirmed();
            }
            
        },()=>{
            alert('Bad!!!');
        })
    }

    addToPasscode(e){
        let localObject = {};
        Object.assign(localObject,this.state);

        localObject.passcode = this.state.passcode+e.currentTarget.innerText;
        this.setState(localObject);
        
    }

    cleanPassCode(e){
        let localObject = {};
        Object.assign(localObject,this.state);

        localObject.passcode = '';
        this.setState(localObject);
    }

    render(){

        
        return(
            
                
                <div className="login-wrap">
                    <div className={'login-key-board '+this.keyboardPattern}>

                        <PassCodeCustomInput passcode={this.state.passcode}></PassCodeCustomInput>
                        
                        <div className="keyboard">
                            { 
                            this.patterns[this.keyboardPattern].map((item,index)=>{
                                return <a key={this.keyrandomStart+index} onClick={this.addToPasscode} className={"key-"+this.keyrandomStart+index+" key"}>{item}</a>
                            })
                            
                            }
                        </div>
                        <div className="actionPanel">
                            <a className="cleanBtn btn btn-primary btn-block" onClick={this.cleanPassCode}>Clean</a>
                            <a className="submitBtn  btn btn-success btn-block" onClick={this.validatePass}>Done!</a>
                        </div>
                        
                    </div>
                </div>          
            
        );
    }

    
}