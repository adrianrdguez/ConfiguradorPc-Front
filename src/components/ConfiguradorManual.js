import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import SelectorComponente from './Configurador/SelectorComponente';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


export default class ConfiguradorManual extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.handleOnClickRowExpandable.bind(this);
    this.state = {
      expandidos: [],
      rowActual: 0,
      elegidos: [],
    };
  }
  handleOnClickRowExpandable(data, i) {
    let arrayelegidos = this.state.elegidos;
    arrayelegidos[i] = { name: data[2], price: data[3] }
    arrayelegidos = arrayelegidos.slice(0, i + 1)

    let nuevosexpandidos = []
    for (let j = 0; j <= i; j++) {
      nuevosexpandidos.push(j)
    }
    this.setState({ elegidos: arrayelegidos, expandidos: nuevosexpandidos, rowActual: i + 1 })
  }
  render() {
    const theme = createMuiTheme({
      palette: { type: 'dark' },
      typography: { useNextVariants: true },
    });
    let lista = []
    for (const [index, value] of this.state.elegidos.entries()) {
      lista.push(<div key={index}><span key={index + 'name'}>{value.name}</span><span key={index + 'price'}>{value.price}</span></div>)
    }



    const columns = [
      {
        name: "name",
      },
      {
        name: "tipo",
        options: {
          display: false
        }
      }
    ]
    const data = [
      { name: 'Procesador', tipo: 'cpus' },
      { name: 'Placa Base', tipo: 'motherboards' },
      { name: 'Tarjetas Graficas', tipo: 'gpus' },
      { name: 'Memoria RAM', tipo: 'rams' },
      { name: 'Ventilador CPU', tipo: 'computerCoolings' },
      { name: 'Disco duro', tipo: 'hardDrives' },
      { name: 'Disco duro 2', tipo: 'hardDrives' },
      { name: 'Caja/Torre', tipo: 'cases' },
      { name: 'Fuente de alimentación', tipo: 'powerSupplies' },
    ]
    const options = {
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
      rowsExpanded: this.state.expandidos,
      isRowExpandable: (i) => {
        return this.state.rowActual === i;
      },
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length + 1;
        return (
          <SelectorComponente colspan={colSpan} data={rowData} index={rowMeta.rowIndex} toggleExpandable={this.onClickHandler} />
        );
      }
    }
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper style={{ height: 60 }}>Configurador Automatico "Beta"</Paper>
        </Grid>
        <Grid item xs={9}>
          <MuiThemeProvider theme={theme}>
            <MUIDataTable
              title={"Configurador de PC"}
              data={data}
              columns={columns}
              options={options}
            />
          </MuiThemeProvider>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ height: 200 }}>
            {lista}
          </Paper>
        </Grid>
      </Grid>
    )
  }
}
