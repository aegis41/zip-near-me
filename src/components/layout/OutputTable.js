import React, { Component } from 'react'

class OutputTable extends Component {

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
            <div className="outputTable">
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
