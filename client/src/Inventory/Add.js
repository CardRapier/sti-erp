import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

function Add() {
  return (
    <MDBContainer>
      <br />
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Suministro</p>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Nombre del Suministro
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

                <br />
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                  Tipo de Suministro
                </label>
                <select className="browser-default custom-select">
                  <option>Escoja la Bodega</option>
                  <option value="1">Bodega 1</option>
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
};

export default Add;