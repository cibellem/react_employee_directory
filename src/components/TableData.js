import React from "react";


function TableData(props) {


    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>DOB</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{props.picture}</td>
                    <td>{props.name}</td>
                    <td>{props.cell}</td>
                    <td>{props.email}</td>
                    <td>{props.dob}</td>
                </tr>
            </tbody>
        </table >
    )

}

export default TableData