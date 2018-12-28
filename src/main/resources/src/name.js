import React, {Component} from 'react';

class Name extends Component {

    render() {
        return (
            <div>
                <div className='navbar'>
                    <div className='logo'>Where to Eat ?</div>
                    <div className='seal'/>
                </div>
                <div className={"buttons"}>
                    <form>
                        <label className={"label-name"}>Enter you
                            Name:</label>
                        <input className={"input-name"} type="text"
                               placeholder={"Name:"} id="nameBox"/>
                        <input className={"button-submit"}
                               type="button" value="Submit"
                               onClick={storeName.bind(this)}/>
                    </form>
                </div>
            </div>
        );

        function storeName() {
            var name = document.getElementById("nameBox").value;
            this.setState({name: name});
            if (name !== "")
            // Todo sid redirect: send name and hashvalue as param
            //     window.location.href = "http://localhost:3000/swipe";
            console.log(window.location.search.substr(1));
            else
                alert("Please enter a name")
        }
    }
}

export default Name;
