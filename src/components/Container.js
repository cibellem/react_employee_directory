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
        employees: [],
        filteredEmployees: []
    };


    // this is the initialization, what do you want the page to display when page it's first loaded
    componentDidMount() {
        API.getUsers().then(res => this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results



        })).catch(err => console.log(err))
    }



    sortByName = () => {

        const filtereds = this.state.filteredEmployees;
        const newFiltereds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
        console.log(newFiltereds)


        this.setState({

            filteredEmployees: newFiltereds
        })




    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };



    employeeSearch = () => {
        API.getUsers()
            .then(res => this.setState({
                filteredEmployees: res.data.results,
                employees: res.data.results
            }))
            .catch(err => console.log(err))
    }

    //when button search it's clicked
    handleSearch = event => {
        event.preventDefault();
        //I want to return the names that match my search

        this.employeeSearch(this.state.search)


        // console.log(employees)
    };



    render() {

        return (
            <div>
                <NavBar />
                <SearchBox
                    value={this.state.search}
                    handleSearch={this.handleSearch}
                    handleInputChange={this.handleInputChange} />
                <TableData results={this.state.filteredEmployees}
                    sortByName={this.sortByName}

                />
            </div >


        )
    }
}

export default Container