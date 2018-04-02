import React from 'react';
import {Component} from 'react';

class PassCodeCustomInput extends Component{
    constructor(props){
        super(props);
        
        
    }

    getDots(){
        let spans=[];
        if(this.props.passcode){
        for(var i=0;i<this.props.passcode.length;i++){
            spans.push(<span key={i} class="dot"></span>);
        }
    }
        return spans;
    }

    render(){

        return (
            <div className="password-container">
                    <span id="password-val">
                            {
                                this.getDots()
                            }
                    </span>
            </div>
        );
    }
}


export class App extends Component{

    

    constructor(props){
        super(props);
        this.state = {
            passcode:''
        }
        
        this.keyrandomStart = parseInt(Math.random()*10000);
        this.keyboardPattern = "number" || props.pattern;
        this.patterns = {
            number:this.generateNaturalNumber(),
            character:this.getCharacters()
        };

        this.addToPasscode = this.addToPasscode.bind(this);

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

    addToPasscode(e){
        let localObject = {};
        Object.assign(localObject,this.state);

        localObject.passcode = this.state.passcode+e.currentTarget.innerText;
        this.setState(localObject);
        
    }
   //<PassCodeCustomInput passcode={this.state.passcode}></PassCodeCustomInput> 
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
                    
                </div>
            </div>          
        );
    }


}