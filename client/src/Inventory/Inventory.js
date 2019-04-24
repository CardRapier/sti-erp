import React, { Component } from 'react'
import Options from './Options'
import ListStorage from './ListStorage'
import Add from './Add'
import Entrace from './Entrance'
import { MDBContainer } from 'mdbreact'
import ListProduct from './ListProduct'
import Movement from './Movement'
import Transfer from "./Transfer"


class Inventory extends Component {
    constructor() {
        super()
        this.state = {
            app: <Entrace />
        }
    }

    handleAppChange = (event) => {
        const {name} = event.target
        if(name === 'Agregar') {this.setState({app: <Add handleAppChange={this.handleAppChange}/> })}
        else if(name === 'Lista') {this.setState({app: <ListProduct />})}
        else if(name === 'Movimiento') {this.setState({app: <Movement />})}
        else if(name === 'Translado') {this.setState({app: <Transfer />})}
        else if(name === 'List') {this.setState({app: <ListStorage /> })}
        else if(name === 'Entrace') {this.setState({app: <Entrace /> })}
    }

    render() {
        return (
            <div>
                <MDBContainer>
                    <Options handleAppChange={this.handleAppChange}/>
                    {this.state.app}
                </MDBContainer>
            </div>
        );
    }
}

export default Inventory