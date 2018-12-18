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
                    {/*<h1>Welcome to where to eat!</h1>*/}
                    <p className={"summaryPara"}>
                        <br/>
                        Our aim is to simplify the decision for you and your
                        friends as to where to eat.
                        <br/>
                        <br/>
                        To get started, Generate a link for your friends, or
                        if you have recieved a code
                        <br/>
                        from your friend, go ahead and enter that!
                    </p>
                    <form>
                        <input id="createButton" className={"button-submit"}
                               type="submit" value="Generate Code"/>
                        <br/>
                        <img src={require("./img/cancel.png")} height={50}
                             className={"cancelButton"} id="cancelButton" onClick={returnCode}/>
                    </form>
                    <button className={"button-submit"} onClick={enterCode}
                            id="enterCode">Enter code
                    </button>

                </div>
            </div>
        );

        function enterCode() {
            var create = document.getElementById("createButton");
            var enterCode = document.getElementById("enterCode")
            var codeTextBox = document.createElement('input');
            var cancel = document.getElementById("cancelButton");
            cancel.style.visibility = "visible";
            codeTextBox.classList.add("inputText");
            codeTextBox.placeholder = "Code:";
            codeTextBox.id = "codeTextBox";
            codeTextBox.background = "black";
            create.classList.add("change");
            create.value = "";
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

        function returnCode() {
        //TODO return code for clicking cross
            //code text box to replace
            var inputBox = document.getElementById("codeTextBox");
            //second button
            var enterCode = document.getElementById("enterCode")
            //create form button
            var createButton = document.createElement('input');
            //cancel button
            var cancel = document.getElementById("cancelButton");
            //change cancel button to hidden
            cancel.style.visibility = "hidden";
            //add button class to createButton
            createButton.classList.add("button-return");
            //Add text to createButton
            createButton.value = "Generate Code";
            //Add id to createButton
            createButton.id = "createButton";
            createButton.type = "submit";
            inputBox.parentNode.replaceChild( createButton, inputBox);
            createButton.classList.add("change");

            setTimeout(function () {
                createButton.classList.add("change2");
                enterCode.innerText = "Enter code";
            }, (0.5 * 1000));
            setTimeout(function () {

            }, (1 * 1000));

        }
    }
}

export default App;
