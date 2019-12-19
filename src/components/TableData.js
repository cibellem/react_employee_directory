import React from "react";
import Moment from 'react-moment';
import "./style.css";

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
                        <td className="email">{result.email}</td>
                        <td><Moment format="MM/DD/YYYY">{result.dob.date}</Moment></td>

                    </tr>
                ))}
            </tbody>
        </table >
    )

}

export default TableData