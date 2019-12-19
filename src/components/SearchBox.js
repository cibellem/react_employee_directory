import React from "react";
import "./style.css";

function SearchBox(props) {


    return (

        <div className="row ">
            <div className="input-field col s4">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    id="search"
                    type="text"
                    name="search"
                    className="validate "
                    placeholder="Search by name" />
                <button
                    type="submit"
                    className=" btn btn-medium waves-effect indigo lighten-3"
                    onClick={props.handleSearch} >Search</button>
            </div>
        </div>
    )

}


export default SearchBox