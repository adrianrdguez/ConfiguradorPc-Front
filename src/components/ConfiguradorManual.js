import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import SelectorComponente from './Configurador/SelectorComponente';

export default class ConfiguradorManual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          name: "name",
        },
        {
          name: "tipo",
          options: {
            display: false
          }
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
      ],
      options: {
        download: false,
        expandableRows: true,
        expandableRowsOnClick: true,
        filter: false,
        pagination: false,
        print: false,
        search: false,
        selectableRowsHeader: false,
        selectableRowsHideCheckboxes: false,
        sort: false,
        viewColumns: false,
        selectableRows: "none",
        renderExpandableRow: (rowData, rowMeta) => {
          const colSpan = rowData.length + 1;
          return (
            <SelectorComponente colspan={colSpan} data={rowData} />
          );
        },
      }
    };
  }

  render() {
    const theme = createMuiTheme({
      palette: { type: 'dark' },
      typography: { useNextVariants: true },
    });
    return (
      <MuiThemeProvider theme={theme}>
        <MUIDataTable
          title={"Configurador de PC"}
          data={this.state.data}
          columns={this.state.columns}
          options={this.state.options}
        />
      </MuiThemeProvider>
    )
  }
}
