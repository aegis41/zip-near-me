import React, { Component } from 'react'

export class OutputTable extends Component {

    columns =
        [
            {
                header: "ZIP Code",
                accessor: 'zip_code'
            },
            {
                header: "Distance",
                accessor: 'distance'
            },
            {
                header: "City",
                accessor: 'city'
            },
            {
                header: "State",
                accessor: 'state'
            }
        ];

    makeRows = (data) => {
        if (data) {
            return data.map((row) => {
                return (
                    <tr>
                        <td>{row.zip_code}</td>
                        <td>{row.distance}</td>
                        <td>{row.city}</td>
                        <td>{row.state}</td>
                    </tr>
                );
            });
        } else {
            return <React.Fragment />
        }
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ZIP Code</th>
                            <th>Distance</th>
                            <th>City</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data ? this.makeRows(this.props.data) : <React.Fragment />}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default OutputTable
