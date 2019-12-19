import React from "react";


function TableData(props) {
    console.log(props)


    return (
        <table className="striped container">
            <thead>
                <tr>
                    <th>Image</th>
                    <th onClick={props.sortByName}>Name</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>DOB</th>
                </tr>
            </thead>

            <tbody>
                {props.results.map(result => (
                    <tr className="table" key={result.login.uuid}>
                        <td> <img src={result.picture.medium} alt="" /></td>
                        <td>{result.name.first + " " + result.name.last}  </td>
                        <td>{result.cell}</td>
                        <td>{result.email}</td>
                        <td>{result.dob.date}</td>

                    </tr>
                ))}
            </tbody>
        </table >
    )

}

export default TableData