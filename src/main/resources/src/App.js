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
                    <form>
                    <input id="createButton" className={"button-submit"} type="submit" value="Create a Form"/>

                    </form>
                    <br/>
                    <button className={"button-submit"} onClick={test} id = "enterCode">Enter
                        code
                    </button>

                </div>
            </div>
        );

        function test() {
            var create = document.getElementById("createButton");
            var enterCode = document.getElementById("enterCode")
            var codeTextBox = document.createElement('input');
            codeTextBox.classList.add("inputText");
            codeTextBox.placeholder = "Code:";
            codeTextBox.id = "codeTextBox";
            codeTextBox.background = "black";
            create.classList.add("change");
            create.value = "";

            // create.classList.remove("button-submit");
            // create.value = "";
            // create.type = "input"
            // create.value = "";
            //
            //
            // create = document.getElementById("codeTextBox");
            // create.classList.add("change");
            //TODO: Make into text box with button
            //add delay to changing classes
            setTimeout(function () {
                create.value = "Code:";
                enterCode.innerText = "Submit";
                create.classList.add("change2");
            }, (0.5 * 1000));
            setTimeout(function () {
                create.parentNode.replaceChild(codeTextBox, create);
            }, (1 * 1000));

        }
    }
}

export default App;
