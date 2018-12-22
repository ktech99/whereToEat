import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import './swipe.css'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                <Route exact={true} path='/' render={() => (
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
                    type="button" value="Generate Code"
                    onClick={getLocation}/>
                    <br/>
                    <img src={require("./img/cancel.png")} height={50}
                    className={"cancelButton"} id="cancelButton"
                    onClick={returnCode}/>
                    </form>
                    <button className={"button-submit"} onClick={enterCode}
                    id="enterCode">Enter code
                    </button>

                    </div>
                    </div>

                    )}/>

                <Route exact={true} path='/swipe' render={() => (
                    <div className="tinder">
                        <div className="tinder--status">
                            <i className="fa fa-remove"></i>
                            <i className="fa fa-heart"></i>
                        </div>

                        <div className="tinder--cards">
                            <div className="tinder--card">
                                <img src="https://placeimg.com/600/300/people"/>
                                <h3>Demo card 1</h3>
                                <p>This is a demo for Tinder like swipe cards</p>
                            </div>
                            <div className="tinder--card">
                                <img src="https://placeimg.com/600/300/animals"/>
                                <h3>Demo card 2</h3>
                                <p>This is a demo for Tinder like swipe cards</p>
                            </div>
                            <div className="tinder--card">
                                <img src="https://placeimg.com/600/300/nature"/>
                                <h3>Demo card 3</h3>
                                <p>This is a demo for Tinder like swipe cards</p>
                            </div>
                            <div className="tinder--card">
                                <img src="https://placeimg.com/600/300/tech"/>
                                <h3>Demo card 4</h3>
                                <p>This is a demo for Tinder like swipe cards</p>
                            </div>
                            <div className="tinder--card">
                                <img src="https://placeimg.com/600/300/arch"/>
                                <h3>Demo card 5</h3>
                                <p>This is a demo for Tinder like swipe cards</p>
                            </div>
                        </div>

                        <div className="tinder--buttons">
                            <button id="nope"><i className="fa fa-remove"></i></button>
                            <button id="love"><i className="fa fa-heart"></i></button>
                        </div>
                    </div>
                )}/>
                </div>
            </BrowserRouter>
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
            createButton.type = "button";
            inputBox.parentNode.replaceChild(createButton, inputBox);
            createButton.classList.add("change");

            setTimeout(function () {
                createButton.classList.add("change2");
                enterCode.innerText = "Enter code";
            }, (0.5 * 1000));
        }

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                alert( "Geolocation is not supported by this browser.");
            }
        }

        function showPosition(position) {
            // Todo Send post request instead
            console.log( "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude);
            // Todo get hashcode as return type
        }
    }

}

export default App;
