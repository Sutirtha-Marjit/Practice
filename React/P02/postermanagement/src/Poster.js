import React from 'react';
import {Component} from 'react';



export class Poster extends Component{

    constructor(props){
        super(props);
        
        this.lcl = 0;
        this.state = props.state || {
            posterObject:{
                posterURL:'https://bit.ly/2pON6b1',
                posterHeading:'Untitled Poster Heading',
                posterKeywords:['poster']
            }
        };
    }

    render(){
        return(
            <div>
                <h3 className="text-success">{this.state.posterObject.posterHeading}</h3>
                <h4>Keywords</h4>
                <p>{this.state.posterObject.posterKeywords.join(',')}</p>
                
                <div>
                    <img className="img-fluid" alt={this.state.posterObject.posterHeading} src={this.state.posterObject.posterURL}/>
                </div>
            </div>
        );
    }

}

