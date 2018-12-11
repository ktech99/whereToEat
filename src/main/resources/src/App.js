import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className={"blackBack"}>
                <div className='navbar'>
                    <div className='logo'>Where to Eat ?</div>
                    <div className='seal'/>
                </div>
                <div className={"buttons"}>
                    <p className={"summaryPara"}>Welcome to where to eat!
                        <br/>
                        Our aim is to simplify the decision for you and your
                        friends as to where to eat.
                        <br/>
                        To get started, create a form for your friends, or
                        if you have recieved a code
                        <br/>
                        from your friend, go ahead and enter that!
                    </p>
                    <button className={"button-submit"}>Create Form</button>
                    <br/>
                    <button className={"button-submit"}>Enter code</button>

                </div>
            </div>
        );
    }
}

export default App;
