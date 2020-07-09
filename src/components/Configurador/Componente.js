import React, { Component } from 'react'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
export default class Componente extends Component {
    render() {
        return (
            <TableRow>
                <TableCell colSpan={this.props.colspan}>
                    Custom expandable row option. Data: {JSON.stringify(this.props.rowdata)}
                </TableCell>
            </TableRow>
        )
    }
}
