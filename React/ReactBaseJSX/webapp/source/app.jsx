import React from 'react';
import ReactDOM from 'react-dom';

export class Application extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const rootTSX = <div className='container-fluid'>
            <br/>
            <h3 className="text-primary">Welcome to React JSX App</h3>
            <hr/>
            <small>App is configured with TypeScript and React</small>
            <br/>
            <small className="test-class"> This is customized LESS class</small>
            <hr/>
            <div>
                <img className="full-width-image" src="./images/pic.jpg"/>
            </div>
        </div>;

        return rootTSX;
    }
}

export function init(div){
    const app = new Application({});
    ReactDOM.render(app.render(),div);
}

init(document.querySelector('.wrapper'));