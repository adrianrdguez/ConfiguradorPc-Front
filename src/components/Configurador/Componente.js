import React, { Component } from 'react'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from 'axios'

export default class Componente extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        }    
        componentDidMount() {
        axios.get(`http://192.168.100.108:3000/` + this.props.data[1])
            .then(res => {
                const data = res.data;
                this.setState({ data: data });
            })
    }
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
