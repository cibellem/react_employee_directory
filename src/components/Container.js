import API from "../utils/API";
import React, { Component } from "react"
import NavBar from "./navBar"
import SearchBox from "./SearchBox"
import TableData from "./TableData"

class Container extends Component {

    // Setting the component's initial state

    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        order: "asc"

    };


    // this is the initialization, what do you want the page to display when page it's first loaded
    componentDidMount() {
        API.getUsers().then(res => this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results
        })).catch(err => console.log(err))
    }

    //if "name" it's clicked employee are shown by asc/desc order

    sortByName = () => {
        const filtereds = this.state.filteredEmployees;
        if (this.state.order === "asc") {
            const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            console.log(sorteds)

            this.setState({
                filteredEmployees: sorteds,
                order: "desc"
            })
        } else {

            const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            console.log(sorteds)

            this.setState({
                filteredEmployees: sorteds,
                order: "asc"
            })

        }
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };


    //API call
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
        API.getUsers().then(res => {
            let employers = res.data.results
            var firstName = this.state.search

            const result = employers.map(item => item.name.first);
            if (result === firstName) {
                console.log("yay!!!")
            }




            console.log(result)


            console.log()


            // let apicallFiltered = apicall.filter(item => item.name.first.length > 5)
            // return apicallFiltered






        })

    }



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