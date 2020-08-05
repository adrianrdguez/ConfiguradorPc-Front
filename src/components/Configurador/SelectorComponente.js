import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Componente from './Componente';
import ComponenteElegido from './ComponenteElegido';
import axios from 'axios'


export default class SelectorComponente extends Component {

    constructor(props) {
        super(props);
        this.clickPoner = this.ponerComponente.bind(this);
        this.clickQuitar = this.quitarComponente.bind(this);
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
                {
                    name: "link",
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
                        <Componente poner={this.clickPoner} colspan={colSpan} rowdata={rowData} />
                    );
                },
                selectableRowsHeader: false,
                selectableRowsHideCheckboxes: true
            }
        };
    }
    componentDidMount() {
        axios.get(`http://192.168.1.53:3001/` + this.props.data[1])
            .then(res => {
                const data = res.data;
                this.setState({ data: data });
            })
    }
    ponerComponente(array) {
        this.setState({ boolean: !this.state.boolean })
        this.setState({ item: array });
    }
    quitarComponente() {
        this.setState({ boolean: !this.state.boolean })
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
                            : <ComponenteElegido quitar={this.clickQuitar} datos={this.state.item}/> 
                        }
                    </MuiThemeProvider>
                </TableCell>
            </TableRow>
        )
    }
}