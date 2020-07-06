import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export default class InputLabel extends Component {
    render() {
        return (
            <Input
                size='massive'
                placeholder='Presupuesto'
            />
        )
    }
}