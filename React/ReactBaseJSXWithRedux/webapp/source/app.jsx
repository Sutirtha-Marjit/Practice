import React from 'react';
import autoBind from 'react-autobind';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { } from 'react-redux';

export class Application extends React.Component{
    constructor(props){
        super(props);
        autoBind(this);
        this.store = null;
        this.reducerCounter = null;
        this.increment=null;
        this.decrement=null;

        this.reduxConfig();
        
    }

    reduxConfig(){

        this.increment = ()=>{
            return {
                type:'incr'
            };
        };

        this.decrement = ()=>{
            return {
                type:'decr'
            };
        };

        this.reducerCounter = (state={volume:0}, action)=>{
            console.log('event fired',action);
            switch(action.type){
                case 'incr':
                    state.volume = state.volume+1;
                break;

                case 'decr':
                    if(state.volume>0){
                        state.volume = state.volume-1;
                    }                    
                break;  
                
                default:
                    console.log('uncategorised Event fired');
                break;    
            }

            return state;

        };
        this.store = createStore(this.reducerCounter);
        this.store.subscribe(()=>{
            console.log(this.store.getState());
            
        });

        
    }

    eventHandler(t){
         if(this.store){
            if(t==='+'){
                console.log(t);
                this.store.dispatch(this.increment());
            }else{
                console.log(t);
                this.store.dispatch(this.decrement());
            } 
            
         }
         
    }

    getReduxTestBox(){
        return <div>            
        <div className='btn-group'>
            <button className='btn btn-dark btn-sm' onClick={()=> this.eventHandler('+')}>Plus <span className='text-success'>+</span></button>
            <button className='btn btn-dark btn-sm' onClick={()=> this.eventHandler('-')}>Minus <span className='text-success'>-</span></button>
        </div> 
        </div>;
    }

    render(){
        const rootTSX = <div className='container-fluid'>
            <br/>
            <h3 className="text-primary">Welcome to React JSX WIth Redux App</h3>
            <hr/>
            <small>App is configured with Redux and React</small>
            <br/>
            <small className="test-class"> This is customized LESS class</small>
            <hr/>
            {this.getReduxTestBox()}
            {/* <div>
                <img className="full-width-image" src="./images/pic.jpg"/>
            </div> */}
        </div>;

        return rootTSX;
    }
}

export function init(div){
    const app = new Application({});
    ReactDOM.render(app.render(),div);
}

init(document.querySelector('.wrapper'));