import React from "react";

function SearchBox(props) {


    return (

        <div className="row">
            <div className="input-field col s4">
                <input value={props.value}
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