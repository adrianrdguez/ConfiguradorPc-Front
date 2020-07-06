import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

function Boton(props) {
    return (
        <Button animated>
            <Button.Content visible>Calcular</Button.Content>
            <Button.Content hidden>
                <Icon name='arrow right' />
            </Button.Content>
        </Button>
    )
}

export default Boton