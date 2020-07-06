import React, { Component } from 'react'
import SelectorComponente from './Configurador/SelectorComponente'
export default class ConfiguradorManual extends Component {
    render() {
        return (
            <div>
                <SelectorComponente 
                    src="https://motherboarddb.com/media/images/Asus/EX-A320M-Gaming/EX-A320M-Gaming-8.jpg"
                    id="motherboard"
                ></SelectorComponente>
            </div>
        )
    }
}
