import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import SelectorComponente from './Configurador/SelectorComponente';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


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
        { name: 'Disco duro 2', tipo: 'hardDrives' },
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
        responsive: "standard",
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Paper style={{ height: 60}}>Configurador Automatico "Beta"</Paper>
        </Grid>
        <Grid item xs={9}>
          <MuiThemeProvider theme={theme}>
            <MUIDataTable
              title={"Configurador de PC"}
              data={this.state.data}
              columns={this.state.columns}
              options={this.state.options}
            />
          </MuiThemeProvider>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ height: 200}}>Precio & Shit</Paper>
        </Grid>
    </Grid>
    )
  }
}
