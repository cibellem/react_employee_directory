import API from "../utils/API";
import React, { Component } from "react"
import NavBar from "./navBar"
import SearchBox from "./SearchBox"
import TableData from "./TableData"



class Container extends Component {

    // Setting the component's initial state
    //here I set result as an object because this is the type of data I am going to be working with
    state = {
        result: {},
        search: ""
    };

    //lifecycle of a state // initialiation code 
    componentDidMount() {
        this.searchEmployee(this.state.result)
    }

    searchEmployee = query => {
        API.getUsers(query)
            .then(res => this.setState({ result: res.data }))

            .catch(err => console.log(err));

    }



    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value //name it's in brackets because I dont want the property name I want the variable name
        });
    };


    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        this.searchEmployee(this.state.search)


    }



    render() {

        return (
            <div>
                <NavBar />
                <SearchBox />
                <TableData
                    cell={this.state.result.cell}
                />
            </div >


        )
    }
}

export default Container