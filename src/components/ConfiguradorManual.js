import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
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
        { name: 'Procesador', tipo: 'cpus' },
        { name: 'Placa Base', tipo: 'motherboards' },
        { name: 'Tarjetas Graficas', tipo: 'gpus' },
        { name: 'Memoria RAM', tipo: 'rams' },
        { name: 'Ventilador CPU', tipo: 'computerCoolings' },
        { name: 'Disco duro', tipo: 'hardDrives' },
        { name: 'Caja/Torre', tipo: 'cases' },
        { name: 'Fuente de alimentación', tipo: 'powerSupplies' },
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
        expandableRowsComponent={<SelectorComponente />}
      />
    )
  }
}
