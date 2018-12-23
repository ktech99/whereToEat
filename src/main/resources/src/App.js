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
                                    Our aim is to simplify the decision for you
                                    and your
                                    friends as to where to eat.
                                    <br/>
                                    <br/>
                                    To get started, Generate a link for your
                                    friends, or
                                    if you have recieved a code
                                    <br/>
                                    from your friend, go ahead and enter that!
                                </p>
                                <form>
                                    <input id="createButton"
                                           className={"button-submit"}
                                           type="button" value="Generate Code"
                                           onClick={getLocation}/>
                                    <br/>
                                    <img src={require("./img/cancel.png")}
                                         height={50}
                                         className={"cancelButton"}
                                         id="cancelButton"
                                         onClick={returnCode}/>
                                </form>
                                <button className={"button-submit"}
                                        onClick={enterCode}
                                        id="enterCode">Enter code
                                </button>

                            </div>
                        </div>

                    )}/>

                    <Route exact={true} path='/swipe' render={() => (
                        <div className="wrapper">
                            <div className="profile-card js-profile-card">
                                <div className="profile-card__img">
                                    <img
                                        src="https://www.savt.ca/scripts/templates/iDea/images/blog-1.jpg"
                                        alt="profile card"/>
                                </div>

                                <div
                                    className="profile-card__cnt js-profile-cnt">
                                    <div className="profile-card__name">
                                        Name of place...
                                    </div>
                                    <div className="profile-card__txt">
                                        Place description
                                    </div>
                                    <div className="profile-card-loc">
                                        <span className="profile-card-loc__txt">
                                        Istanbul, Turkey
                                         </span>
                                    </div>
                                    <div className="profile-card-ctr">
                                        <button
                                            className="profile-card__button button--blue js-message-btn">
                                            Yes!
                                        </button>
                                        <button
                                            className="profile-card__button button--orange">Hell Nah!
                                        </button>
                                    </div>
                                </div>

                                <div
                                    className="profile-card-message js-message">
                                    <form className="profile-card-form">
                                        <div
                                            className="profile-card-form__container">
                                            <textarea
                                                placeholder="Say something..."></textarea>
                                        </div>

                                        <div
                                            className="profile-card-form__bottom">
                                            <button
                                                className="profile-card__button button--blue js-message-close">
                                                Send
                                            </button>

                                            <button
                                                className="profile-card__button button--gray js-message-close">
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>

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
                alert("Geolocation is not supported by this browser.");
            }
        }

        function showPosition(position) {
            // Todo Send post request instead
            console.log("Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude);
            // Todo get hashcode as return type
        }

    }

}

export default App;
