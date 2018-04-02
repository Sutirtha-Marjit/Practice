import React from 'react';
import {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {Welcome} from './Welcome';
import {PosterCreationForm} from './PosterCreation';
import {PosterCollection} from './PosterCollection';
import {TestForm} from './TestForm';


export class LandingWindow extends Component{

   
    render(){
        
        return(
            <div class="poster-management-app">
            <Router>
            <div className="container-fluid">
                
                <header>
                        <div>
                        <h1>Poster Management</h1>
                        </div>
                        <div>
                        <ul className="nav nav-tabs">
                            <li><Link to="/">Welcome</Link></li>
                            <li><Link to="/posters">Posters</Link></li>
                            <li><Link to="/create-poster"><span className="ion-plus-circled"></span> Create</Link></li>
                        </ul>
                        </div>
                    </header>
                    <div className="body-content">
                        
                            <div>
                            <Route exact path="/" component={Welcome} />       
                            <Route path="/posters" component={PosterCollection} />
                            <Route path="/create-poster" component={PosterCreationForm} />
                            <Route path="/Test" component={TestForm} />
                            
                            </div>                                   
                        
                    </div>
                    
            </div>  
            </Router>          
            </div>
        );
    }


}