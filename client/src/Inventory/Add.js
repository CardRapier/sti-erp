import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, ToastContainer,toast } from 'mdbreact';
import uuid from "uuid"
import { connect } from 'react-redux';
import { addProduct } from '../actions/productActions'


class Add extends React.Component {
  state={
    name: "",
    price: 0,
    type: "Producto"
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newProduct = {
      name: this.state.name,
      price: this.state.price,
      type: this.state.type
    };

    this.props.addProduct(newProduct);

    toast.success('Producto creado', {
      position: "top-right",
    });

  };


  render(){
    return (
      <MDBContainer>
        <br />
        <MDBRow>
        <ToastContainer
                hideProgressBar={false}
                newestOnTop={true}
                autoClose={5000}
            />
          <MDBCol md="12">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.onSubmit}>
                  <p className="h4 text-center py-4">Suministro</p>
                  <label
                    htmlFor="name"
                    className="grey-text font-weight-light"
                  >
                    Nombre del Suministro
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    onChange={this.onChange}
                  />
                  <br />
                  <label
                    htmlFor="price"
                    className="grey-text font-weight-light"
                  >
                    Precio
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="form-control"
                    onChange={this.onChange}
                  />
  
                  <br />
                  <label
                    htmlFor="type"
                    className="grey-text font-weight-light"
                  >
                    Tipo de Suministro
                  </label>
                  <select onChange={this.onChange} name="type" id="type" className="browser-default custom-select">
                    <option value="Producto">Producto</option>
                    <option value="Insumo">Insumo</option>
                  </select>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="indigo" className="white-text" type="submit">
                      Agregar
                    </MDBBtn>
                    <MDBBtn color="indigo" className="white-text">
                      Cancelar
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
};

const mapStateToProps = state => ({
  product: state.product,
});

export default connect(
  mapStateToProps,
  { addProduct }
)(Add);