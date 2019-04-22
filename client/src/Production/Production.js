import React from "react"
import {MDBBtn, MDBContainer, MDBRow, MDBCol,MDBInput,MDBModal,MDBModalBody,MDBModalFooter,MDBModalHeader} from "mdbreact"
import List from "../Inventory/List"

class Production extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            modal: false
        };

    }
    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }
    
    render(){
        return(
            <div>
                <MDBContainer>
                    <MDBRow className="mt-5">
                        <MDBCol md="12"><center>
                        <MDBBtn color="indigo" onClick={this.toggle}>Agregar nueva orden de produccion</MDBBtn>
                        </center></MDBCol>
                        <MDBContainer>
                        {/* MODAL */}
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}    >
                        <MDBModalHeader toggle={this.toggle}>Agregar orden</MDBModalHeader>
                        <MDBModalBody>

                        <div>
                        <label htmlFor="select">Seleccione el producto</label>
                            <select id="select" className="browser-default custom-select">
                            <option value="1">Producto 1</option>
                            <option value="2">Producto 2</option>
                            <option value="3">Producto 3</option>
                            </select>
                        </div>
                        <MDBInput label="Cantidad a producir" />
                        <div>
                        <label htmlFor="select2">Insumo necesitado</label>
                            <select id="select2" className="browser-default custom-select">
                            <option value="1">Insumo 1</option>
                            <option value="2">Insumo 2</option>
                            <option value="3">Insumo 3</option>
                            </select>
                        </div>
                        <MDBInput label="Cantidad del insumo" />
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle}>Cancelar</MDBBtn>
                            <MDBBtn color="primary">Crear orden</MDBBtn>
                        </MDBModalFooter>
                        </MDBModal>
                    </MDBContainer>
                    </MDBRow>

                    <MDBRow>
                    <MDBCol md="12">
                    <List />
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default Production