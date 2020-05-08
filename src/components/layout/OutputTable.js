import React, { Component } from 'react'
import { useTable } from 'react-table';

class OutputTable extends Component {

    columns = React.useMemo(
        () => [
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
        ],
        []
    )

    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
} = useTable({ columns, data });
    }

render() {
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                rows.map((row) => {
                    prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                </tr>
                        )
                    })
            </tbody>
        </table>
    );
}
}

export default OutputTable
