import React, { Component } from 'react'

export default class Slider extends Component {
    state = { prioridad: 10 }

    handleChange = (e) => this.setState({ prioridad: e.target.value })

    render() {
        const { prioridad } = this.state
        return (
            <div className="rangos">
                <div>Prioridad de {this.props.componente}: {prioridad}0%</div>
                <input
                    type='range'
                    min={1}
                    max={10}
                    value={prioridad}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}