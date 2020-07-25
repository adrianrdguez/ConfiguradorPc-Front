import React, { Component } from 'react'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import CeldaConfigurador from './CeldaConfigurador';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';


export default class Componente extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        } 
    render() {
        const theme = createMuiTheme({
            palette: {
              primary: orange,
            },
          });
        return (
                <TableRow>
                    <TableCell colSpan={this.props.colspan}>
                        <Grid justify="center" alignItems="center" container spacing={2}>
                            <Grid  item sm={2}>
                                <div>
                                    <img alt='gatito' src ='/pccom.svg'></img>
                                </div>   
                            </Grid>
                            <Grid text-align='center' item sm={4}>
                                <div>
                                    {this.props.rowdata[2]}
                                </div>   
                            </Grid>
                            <Grid text-align='center' item sm={3}>
                                <div>
                                    {this.props.rowdata[3]}
                                </div>   
                            </Grid>
                            <Grid text-align='center' item sm={3}>
                                    <div>
                                        <ThemeProvider theme={theme}>
                                            <Button onClick={() => this.props.prueba(this.props.rowdata)} variant="contained" color="primary">Añadir</Button>
                                        </ThemeProvider>
                                    </div> 
                            </Grid>
                        </Grid>
                    </TableCell>
                </TableRow>
        )
    }
}