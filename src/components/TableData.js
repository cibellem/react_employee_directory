import React, { Component } from "react";


class TableData extends Component {
    render() {

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
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>619-589-1212</td>
                        <td>anemail@gmail.com</td>
                        <td>11/11/1987</td>
                    </tr>
                </tbody>
            </table >
        )
    }
}

export default TableData