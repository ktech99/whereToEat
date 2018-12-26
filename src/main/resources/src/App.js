import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Landing from './landing';
import Name from './name';
import Swipe from './swipe'
import Switch from "react-router-dom/es/Switch";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hashValue: "hash",
            name: ""
        };
    }


    render() {
        return (
            <Switch>
                <div>
                    {/*Landing Page*/}
                    <Route exact={true} path='/' component={Landing}/>

                    {/*Todo Page to redirect to with name and hashvalue*/}
                    {/*Swipe page to choose restaurants*/}
                    <Route exact={true} path='/swipe' component={Swipe}/>

                    {/*Todo Page to redirect to with hashvalue*/}
                    {/*Enter name page*/}
                    <Route exact={true} path='/name' component={Name}/>
                </div>
            </Switch>
        );

    }
}

export default App;
