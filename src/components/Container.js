import API from "../utils/API";
import React, { Component } from "react"
import NavBar from "./navBar"
import SearchBox from "./SearchBox"
import TableData from "./TableData"



class Container extends Component {

    // Setting the component's initial state
    //here I set result as an object because this is the type of data I am going to be working with
    state = {
        search: "",
        results: []
    };



    //  lifecycle of a state // initialiation code 
    componentDidMount() {
        this.searchEmployee(this.state.results)
    }

    searchEmployee = query => {
        API.getUsers(query)
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    };


    //shows in the screen whatever it's being typed 
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value //name it's in brackets because I dont want the property name I want the variable name
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
    };



    render() {

        return (
            <div>
                <NavBar />
                <SearchBox search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange} />
                <TableData results={this.state.results}

                />
            </div >


        )
    }
}

export default Container