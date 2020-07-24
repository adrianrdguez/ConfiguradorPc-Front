import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Componente from './Componente';
import { palette } from '@material-ui/system';
import axios from 'axios'


export default class SelectorComponente extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.cual.bind(this);
        this.state = {
            boolean: true,
            columns: [
                {
                    name: "image",
                    label: "Imagen",
                    options: {
                        searchable: false,
                        filter: false,
                        sort: false,
                        customBodyRender: (value, tableMeta, updateValue) => (
                            <img src={value} alt="gatito"></img>
                        )
                    }
                },
                {
                    name: "brand",
                    label: "Compañia",
                    options: {
                        display: 'false',
                        searchable: false,
                        filterType: 'multiselect',
                        filter: true,
                        sort: false,
                    }
                },
                {
                    name: "name",
                    label: "Nombre",
                    options: {
                        filter: true,
                        sort: false,
                    }
                },
                {
                    name: "price",
                    options: {
                        display: 'false',
                        searchable: false,
                        filter: false,
                        sort: false,
                    }
                },
            ],
            options: {
                filterType: 'textField',
                download: false,
                print: false,
                responsive: "standard",
                viewColumns: false,
                rowsPerPage: 5,
                rowsPerPageOptions: [],
                expandableRows: true,
                expandableRowsHeader: false,
                expandableRowsOnClick: true,
                renderExpandableRow: (rowData, rowMeta) => {
                    const colSpan = rowData.length + 1;
                    return (
                        <Componente prueba={this.handleClick} colspan={colSpan} rowdata={rowData} />
                    );
                },
                selectableRowsHeader: false,
                selectableRowsHideCheckboxes: true
            }
        };
    }
    componentDidMount() {
        axios.get(`http://192.168.100.108:3001/` + this.props.data[1])
            .then(res => {
                const data = res.data;
                this.setState({ data: data });
            })
    }
    cual(array) {
        this.setState({ boolean: !this.state.boolean })
        this.setState({ item: array });
    }
    render() {
        const theme = createMuiTheme({
            palette: { type: 'light' },
            typography: { useNextVariants: true },
        });
        return (
            <TableRow>
                <TableCell colSpan={this.props.colspan}>
                    <MuiThemeProvider theme={theme}>
                        {this.state.boolean
                            ? <MUIDataTable
                                data={this.state.data}
                                columns={this.state.columns}
                                options={this.state.options}
                            />
                            :   <Grid style={{backgroundColor:'white',borderRadius:10}} justify="center" alignItems="center" container spacing={2}>
                                    <Grid item xs={6} sm={3}>
                                        <div>
                                            {this.state.item[0]}
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <div>
                                            <img alt='gatito' src='/pccom.svg'></img>
                                        </div>
                                    </Grid>
                                    <Grid text-align='center' item xs={6} sm={3}>
                                        <div style={{ color: 'black' }}>
                                            {this.state.item[2]}
                                        </div>
                                    </Grid>
                                    <Grid text-align='center' item xs={6} sm={3}>
                                        <div style={{ color: 'black' }}>
                                            {this.state.item[3]}
                                        </div>
                                    </Grid>
                                </Grid>
                        }
                    </MuiThemeProvider>
                </TableCell></TableRow>
        )
    }
}