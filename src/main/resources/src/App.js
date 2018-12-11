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
                    <h1>Welcome to where to eat!</h1>
                    <p className={"summaryPara"}>
                        <br/>
                        Our aim is to simplify the decision for you and your
                        friends as to where to eat.
                        <br/>
                        To get started, create a form for your friends, or
                        if you have recieved a code
                        <br/>
                        from your friend, go ahead and enter that!
                    </p>
                    <button id="createButton" className={"button-submit"}>Create
                        Form
                    </button>
                    <br/>
                    <button className={"button-submit"} onClick={test}>Enter
                        code
                    </button>

                </div>
            </div>
        );

        function test() {
            var create = document.getElementById("createButton");
            // create.classList.remove("button-submit");
            create.innerText = "";
            create.classList.add("change");
            //TODO: Make into text box with button
            //add delay to changing classes
            setTimeout(function () {
                create.classList.add("change2");
            }, (2 * 1000));

        }
    }
}

export default App;
