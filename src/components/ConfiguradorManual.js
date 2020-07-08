import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import SelectorComponente from './Configurador/SelectorComponente';

export default class ConfiguradorManual extends Component {
  constructor(props) {
    super(props);
    this.state = {
        columns: [
          {
            selector: 'name',
          }
        ],
        data: [
          { name: 'Procesador', tipo: 'cpu'},
          { name: 'Placa Base', tipo: 'motherboard'},
          { name: 'Memoria RAM', tipo: 'ram'},
          { name: 'Ventilador CPU', tipo: 'fan'},
          { name: 'Disco duro', tipo: 'harddrive'},
          { name: 'Caja/Torre', tipo: 'case'},
          { name: 'Fuente de alimentación', tipo: 'powersupply'},
        ]
};
}
    render() {
        return (
          <DataTable
                  title="Configurador de PC"
                  noTableHead
                  columns={this.state.columns}
                  data={this.state.data}
                  highlightOnHover
                  expandableRows
                  theme='dark'
                  expandOnRowClicked
                  expandableRowsComponent={<SelectorComponente/>}
          />
        )
    }
}
