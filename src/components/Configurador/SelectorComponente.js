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
        this.onClickHandler = this.handleOnClickComponente.bind(this);
        this.state = {
            boolean: true,
            item: [],
            columns: [
                {
                    name: "image",
                    label: "Imagen",
                    options: {
                        searchable: false,
                        filter: false,
                        sort: false,
                        customBodyRender: (value) => (
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
                selectableRowsHeader: false,
                selectableRowsHideCheckboxes: true,
                expandableRows: true,
                expandableRowsHeader: false,
                expandableRowsOnClick: true,
                renderExpandableRow: (rowData, rowMeta) => {
                    const colSpan = rowData.length + 1;
                    return (
                        <Componente poner={this.onClickHandler} colspan={colSpan} rowdata={rowData} />
                    );
                },
            }
        };
    }
    componentDidMount() {
        import(`../../json/${this.props.data[1]}.json`).then(({ default: myData }) => {
            const data = myData;
            this.setState({ data: data });
        }).catch(() => {
            axios.get(`http://192.168.1.53:3001/` + this.props.data[1])
            .then(res => {
                const data = res.data;
                this.setState({ data: data });
            }).catch(() => {
                this.setState({ data:     {
                    "brand": 'brand',
                    "name": 'nombre',
                    "price": "precio",
                    "image": "https://thumb.pccomponentes.com/w-530-530/articles/17/173598/1539027947000-1435918.jpg",
                    "link": "https://thumb.pccomponentes.com/w-530-530/articles/17/173598/1539027947000-1435918.jpg"
                } });
            })
        });

    }
    handleOnClickComponente(array) {
        this.setState({ boolean: !this.state.boolean })
        if (array) {
            this.props.toggleExpandable(array, this.props.index);
            this.setState({ item: array });
        }
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
                        {this.state.item.length !== 0
                            ? <ComponenteElegido quitar={this.onClickHandler} datos={this.state.item} />
                            : <div></div>
                        }
                        {this.state.boolean
                            ? <MUIDataTable
                                data={this.state.data}
                                columns={this.state.columns}
                                options={this.state.options}
                            />
                            : <div></div>
                        }
                    </MuiThemeProvider>
                </TableCell>
            </TableRow>
        )
    }
}