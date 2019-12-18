import React from "react";

function SearchBox(props) {


    return (

        <div className="row">
            <div className="input-field col s4">
                <input value={props.search}
                    onChange={props.handleInputChange}
                    id="search"
                    type="text"
                    name="search"
                    className="validate"
                    placeholder="Search" />
                <button onClick={props.handleFormSubmit} >Search</button>
            </div>
        </div>
    )

}


export default SearchBox