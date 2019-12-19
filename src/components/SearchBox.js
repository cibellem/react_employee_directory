import React from "react";

function SearchBox(props) {


    return (

        <div className="row">
            <div className="input-field col s4">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    id="search"
                    type="text"
                    name="search"
                    className="validate"
                    placeholder="Search Employee" />
                <button type="submit" onClick={props.handleSearch} >Search</button>
            </div>
        </div>
    )

}


export default SearchBox