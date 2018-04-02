import React from 'react';
import {Component} from 'react';
import {LoginForm} from './LoginForm';
import {LandingWindow} from './LandingWindow';



export class App extends Component{

    constructor(props){
        super(props);
        this.state = {authDone:false};
        this.loginConfirmed = this.loginConfirmed.bind(this);
        
    }

    loginConfirmed(){
        let lclState={};
        Object.assign(lclState,this.state);
        lclState.authDone = true;
        this.setState(lclState);
    }

    getScreen(){
        if(this.state.authDone){
          return  <LandingWindow></LandingWindow>;
        }else{
          return  <LoginForm onLoginConfirmed={this.loginConfirmed}></LoginForm>;
        }
    }

    render(){
        return (
            <div id="app">
                {this.getScreen()}
            </div>
        );
    }

}