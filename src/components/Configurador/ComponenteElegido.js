import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

export default class CeldaConfigurador extends Component {
    render() {
        let tabla = this.props.datos;
        function handleClick() {
            window.open(`${tabla[4]}`);
        }
        return (
            <Grid style={{ backgroundColor: 'white', borderRadius: 10 }} justify="center" alignItems="center" container spacing={2}>
                <Grid item sm={2}>
                    <div>
                        {tabla[0]}
                    </div>
                </Grid>
                <Grid text-align='center' item sm={5}>
                    <div onClick={handleClick} style={{ color: 'black', cursor: 'pointer' }}>
                        {tabla[2]}
                    </div>
                </Grid>
                <Grid item sm={3}>
                    <div>
                        <img alt='gatito' src='/pccom.svg'></img>
                    </div>
                </Grid>
                <Grid text-align='center' item sm={1}>
                    <div style={{ color: 'black' }}>
                        {tabla[3]}
                    </div>
                </Grid>
                <Grid text-align='center' item sm={1}>
                    <div style={{ color: 'black' }}>
                        <IconButton onClick={() => this.props.quitar()} >
                            <ClearIcon fontSize="medium" />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        )
    }
}
