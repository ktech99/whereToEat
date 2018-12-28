import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hashValue: "hash",
            name: ""
        };
    }

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
                               onClick={getLocation.bind(this)}/>
                        <br/>
                        <img src={require("./img/cancel.png")}
                             height={50}
                             className={"cancelButton"}
                             id="cancelButton"
                             onClick={returnCode}/>
                    </form>
                    <p className={"copyPara"}
                       id="copyCodeText">Click the code to Copy, and
                        give it to all your friends:</p>
                    <button className={"button-submit"}
                            onClick={enterCode.bind(this)}
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
            }, (1000));
            // makes button redirect to name page on click
            document.getElementById("enterCode").onclick = redirectToName.bind(this);


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
            createButton.onclick = getLocation.bind(this);
            inputBox.parentNode.replaceChild(createButton, inputBox);
            createButton.classList.add("change");

            setTimeout(function () {
                createButton.classList.add("change2");
                enterCode.innerText = "Enter code";
                enterCode.id = "enterCode"
            }, (0.5 * 1000));
        }

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition.bind(this));
                var createButton = document.createElement('button');
                createButton.onclick = showHash.bind(this);
                setTimeout(function () {
                    createButton.click();
                }, (0.5 * 1000));
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }

        function showPosition(position) {
            fetch('http://localhost:8080/getCode?latitude=' + position.coords.latitude + '&longitude=' + position.coords.longitude, {
                method: 'get'

            }).then(res => {
                if (!res.ok) {
                    throw res;
                }
                return res;
            }).then(response => response.json())
                .then(response => {
                    this.setState({hashValue: response});
                    // showHash(response);
                })
        }

        function showHash() {
            //code text box to replace
            var enterCode = document.getElementById("enterCode")
            //create form button
            var copyButton = document.createElement('button');
            //add button class to createButton
            copyButton.classList.add("button-return");
            //Add text to createButton
            copyButton.innerHTML = "";
            //Add id to createButton
            copyButton.id = "copyButton";
            //To copy Text on clicking
            copyButton.onclick = copyFunction;
            //Replace child
            enterCode.parentNode.replaceChild(copyButton, enterCode);
            //Add animations
            copyButton.classList.add("change");
            var hashVal = "" + this.state.hashValue;
            setTimeout(function () {
                copyButton.classList.add("change2");
            }, (0.5 * 1000));
            setTimeout(function () {
                copyButton.innerHTML = hashVal;
            }, (0.8 * 1000));
            document.getElementById("copyCodeText").style.visibility = "visible";
            document.getElementById("createButton").value = "Restaurant picker";
            // Redirect to name page
            document.getElementById("createButton").onclick = redirectToName;
        }

        function redirectToName() {
            // Todo sid redirect: send hashvalue as param
            window.location.href = "http://localhost:3000/name?hash="+this.state.hashValue;
            return (<Redirect push to={{
                pathname : '/name',
                search: '?hash=123'
            }}/>)
        }

        function copyFunction() {
            console.log("reached");
            var toChange = document.getElementById("copyButton");
            var textarea = document.createElement("textarea");
            textarea.value = toChange.innerHTML;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }

    }
}

export default Landing;
