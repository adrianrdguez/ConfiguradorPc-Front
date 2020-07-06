import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

export default class SelectorComponente extends Component {

    render() {
        return (
            <div className="circulos" id={this.props.id}>
                <Image src={this.props.src}  />
            </div>
        )
    }
}
