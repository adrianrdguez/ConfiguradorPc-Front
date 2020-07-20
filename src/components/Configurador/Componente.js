import React, { Component } from 'react'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';


export default class Componente extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        }    
    render() {
        return (
                <TableRow>
                    <TableCell colSpan={this.props.colspan}>
                        <Grid justify="center" alignItems="center" container spacing={2}>
                            <Grid  item xs={6} sm={3}>
                                <div>
                                <img alt='gatito' src ='/pccom.svg'></img>
                                </div>   
                            </Grid>
                            <Grid text-align='center' item xs={12} sm={6}>
                                <div>
                                    {this.props.rowdata[2]}
                                </div>   
                            </Grid>
                            <Grid text-align='center' item xs={6} sm={3}>
                                <div direction="row" justify="space-between" alignItems="center">
                                    {this.props.rowdata[3]}
                                    <Button variant="contained" color="primary">Add</Button>
                                </div>   
                            </Grid>
                        </Grid>
                    </TableCell>
                </TableRow>
        )
    }
}
