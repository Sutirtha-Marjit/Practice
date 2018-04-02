import React from 'react';
import {Component} from 'react';
import {Poster} from './Poster';
import {PosterManipulate} from './Service/PosterManipulate';


export class PosterCreationForm extends Component{

    
    constructor(props){
        super(props);
        
        this.state = {
            posterObject:{
                posterURL:'https://bit.ly/2ur484y',
                posterHeading:'Untitled Poster Heading',
                posterKeywords:['poster']
            }
        };

        this.handleChange = this.handleChange.bind(this);
       // this.savePoster = this.handleChange.bind(this);
        
    }

    

    handleChange(e){       
        
        let localObject = {};
        Object.assign(localObject,this.state);

        switch(e.currentTarget.name){
            case 'poster-heading':            
            localObject.posterObject.posterHeading = e.currentTarget.value;
            this.setState(localObject);
            break;

            case 'poster-keyword':
            localObject.posterObject.posterKeywords = e.currentTarget.value.split(',');
            this.setState(localObject);
            break;

            case 'poster-image':
            localObject.posterObject.posterURL = e.currentTarget.value;
            this.setState(localObject);
            break;

            default:
            break;

        }

        //console.log(this.state);
    }

    savePoster(e){
        alert('ok');
        e.preventDefault();
        
        PosterManipulate.savePoster({});
    }


    render(){
        
        return(
            <div className="row">
                <div className="span6">
                    <Poster state={this.state}/>
                </div>
                <div className="span6">
            <div className="form-container">
                <h4>{this.state.posterObject.posterHeading}</h4>
                <form name="poster-creation" onSubmit={this.savePoster}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="poster-heading" name="poster-heading" placeholder="Poster heading" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="poster-keyword" name="poster-keyword" placeholder="keywords" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="poster-image" name="poster-image" placeholder="Image" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">Create</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
            
        );
        
    }
} 