import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className={"blackBack"}>
                <div className='navbar'>
                    <div className='logo'>Where to Eat ?</div>
                    <div className='seal'/>
                    <div className={"buttons"}>
                        <button className={"button-submit"}>Create Form</button>
                        <br/>
                        <button className={"button-submit"}>Enter code</button>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
