import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import Boton  from "./formularioComponents/Boton";
import InputLabel  from "./formularioComponents/InputLabel";
import Slider  from "./formularioComponents/Slider";

export class ConfiguradorAutomatico extends Component {

    render() {
        return (
            <div>
                <Grid columns={3} centered divided>
        <Grid.Row>
            <InputLabel></InputLabel>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Slider componente="Motherboard"></Slider>
          </Grid.Column>
          <Grid.Column>
          <Slider componente="CPU"></Slider>
          </Grid.Column>
          <Grid.Column>
          <Slider componente="RAM"></Slider>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Slider componente="GPU"></Slider>
          </Grid.Column>
          <Grid.Column>
          <Slider componente="PowerSupply"></Slider>
          </Grid.Column>
          <Grid.Column>
          <Slider componente="Cases"></Slider>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Slider componente="Hard Drive 1"></Slider>
          </Grid.Column>
          <Grid.Column>
          <Slider componente="Hard Drive 2"></Slider>
          </Grid.Column>
          <Grid.Column>
          <Slider componente="Refrigeracion CPU"></Slider>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Boton></Boton>
        </Grid.Row>
      </Grid>
            </div>
        )
    }
}

export default ConfiguradorAutomatico
