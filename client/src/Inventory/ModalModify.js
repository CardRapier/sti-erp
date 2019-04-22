import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

class ModalPage extends Component {
state={
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <div>
      <MDBBtn color="indigo" size="sm" onClick={this.toggle}><MDBIcon icon="edit" /></MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
        <MDBModalHeader toggle={this.toggle}>Modificar Suministro</MDBModalHeader>
        <form>
        <MDBModalBody>
        <MDBContainer>
      <br />
      <MDBRow>
        <MDBCol md="12">
                <p className="h4 text-center py-4">Suministro</p>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Nombre del Suministro {this.props._id}
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                  Precio
                </label>
                <input
                  type="number"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="primary" type="submit">Guardar cambios</MDBBtn>
          <MDBBtn color="secondary" onClick={this.toggle}>Cerrar</MDBBtn>
        </MDBModalFooter>
        </form>
      </MDBModal>
      </div>
    );
  }
}

export default ModalPage;