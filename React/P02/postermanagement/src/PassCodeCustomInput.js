import React from 'react';
import {Component} from 'react';

export class PassCodeCustomInput extends Component{
    
    getDots(){
        let spans=[];
        if(this.props.passcode){
        for(var i=0;i<this.props.passcode.length;i++){
            spans.push(<span key={i} className="dot"></span>);
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

