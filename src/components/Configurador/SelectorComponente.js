import React, { Component } from 'react'
import DataTable from 'react-data-table-component';
import Componente from './Componente'
export default class SelectorComponente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    selector: 'imagen'
                },
                {
                  selector: 'name',
                },
            ],
            data: [
            { 
                imagen: 'img1 ' + this.props.data.name,
                name: this.props.data.name,
            },
            { 
                imagen: 'img2 ' + this.props.data.name,
                name: this.props.data.name,
            },
            { 
                imagen: 'img3 ' + this.props.data.name,
                name: this.props.data.name,
            },
            { 
                imagen: 'img4 ' + this.props.data.name,
                name: this.props.data.name,
            },
            { 
                imagen: 'img5 ' + this.props.data.name,
                name: this.props.data.name,
            },
            { 
                imagen: 'img6 ' + this.props.data.name,
                name: this.props.data.name,
            },
            { 
                imagen: 'img7 ' + this.props.data.name,
                name: this.props.data.name,
            },
        ]
    };
    }
    render() {
        return (
            <DataTable
            noTableHead
            noHeader
            columns={this.state.columns}
            data={this.state.data}
            expandableRows
            striped
            highlightOnHover
            expandableRowsHideExpander
            expandOnRowClicked
            expandableRowsComponent={<Componente/>}
    />
        )
    }
}
