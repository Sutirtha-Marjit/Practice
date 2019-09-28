import { WrkoutItem } from '../datatypes/dtp';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Console} from  './console';

export class App extends React.Component{
    constructor(){
        super({});
        const c = new Console();
    }

    render(){
        const rootTSX = <div className='container-fluid'>
            Hello!
        </div>;

        return rootTSX;
    }
}

export function init(div:HTMLDivElement){
    const app = new App();
    ReactDOM.render(app.render(),div);
}


