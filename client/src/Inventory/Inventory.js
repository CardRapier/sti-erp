import React, { Component } from 'react'
import Options from './Options'
import List from './List'
import Add from './Add'
import Entrance from './Entrance'
import { MDBContainer } from 'mdbreact'
import ListProduct from './ListProduct'
import Movement from './Movement'
import Transfer from "./Transfer"


class Inventory extends Component {
    constructor() {
        super()
        this.state = {
            app: <List />
        }
    }

    handleAppChange = (event) => {
        const {name} = event.target
        if(name === 'Agregar') {this.setState({app: <Add /> })}
        else if(name === 'Lista') {this.setState({app: <ListProduct />})}
        else if(name === 'Movimiento') {this.setState({app: <Movement />})}
        else if(name === 'Translado') {this.setState({app: <Transfer />})}
        else {this.setState({app: <List /> })}
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