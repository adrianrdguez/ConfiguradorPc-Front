import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import Componente from './Componente';
import axios from 'axios'


export default class SelectorComponente extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
                onRowExpansionChange: (currentRowsExpanded) => {

                },
                expandableRowsOnClick: true,
                renderExpandableRow: (rowData, rowMeta) => {
                    const colSpan = rowData.length + 1;
                    return (
                        <Componente colspan={colSpan} rowdata={rowData} />
                    );
                },
                selectableRowsHeader: false,
                selectableRowsHideCheckboxes: true
            }
        };
    }
    componentDidMount() {
        axios.get(`http://192.168.100.108:3000/` + this.props.data.tipo)
            .then(res => {
                const data = res.data;
                console.log(data)
                this.setState({ data: data });
            })
    }

    render() {
        return (
            <MUIDataTable
                data={this.state.data}
                columns={this.state.columns}
                options={this.state.options}
            />
        )
    }
}
