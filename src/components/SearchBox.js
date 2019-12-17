import React, { Component } from "react";

class Form extends Component {

    // Setting the component's initial state
    state = {
        firstName: "",
        lastName: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();


    }

    render() {
        return (

            <div class="row">
                <div class="input-field col s4">
                    <input value="" id="first_name2" type="text" class="validate" placeholder="Search" />
                    <button>Search</button>
                </div>
            </div>
        )
    }
}

export default Form