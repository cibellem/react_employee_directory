import React from "react";
import Moment from 'react-moment';
import "./style.css";

function TableData(props) {
    console.log(props)


    return (
        <table className="striped container">
            <thead>
                <tr>
                    <th></th>
                    <th onClick={props.sortByName}>Name</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>DOB</th>
                </tr>
            </thead>

            <tbody>
                {props.results.map(result => (
                    <tr className="table" key={result.login.uuid}>
                        <td> <img className=" z-depth-2
                        "src={result.picture.large} alt="" /></td>
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