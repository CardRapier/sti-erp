import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

class Movement extends Component {
    state = {
        selectedOption: null,
      }

      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        alert("Desea agregarlo?")
      }
    render() {
        return (
            <MDBContainer>
              <br />
              <MDBRow>
                <MDBCol md="12">
                  <MDBCard>
                    <MDBCardBody>
                      <form>
                        <p className="h4 text-center py-4">Movimiento</p>
                        <label
                          htmlFor="defaultFormCardNameEx"
                          className="grey-text font-weight-light"
                        >
                          Tercero
                        </label>
                        <Select
                              value={this.state.selectedOption}
                              onChange={this.handleChange}
                              options={options}
                          />
                        <br />
                        <label
                          htmlFor="defaultFormCardEmailEx"
                          className="grey-text font-weight-light"
                        >
                          Tipo de operacion
                        </label>
                        <select className="browser-default custom-select">
                          <option>Escoja la operacion</option>
                          <option value="1">Entrada</option>
                          <option value="2">Salida</option>
                        </select>
                        <MDBTable striped>
                        <MDBTableHead>
                            <tr>
                            <th>Suministro</th>
                            <th>Cantidad</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                            <td>
                            <Select
                              value={this.state.selectedOption}
                              onChange={this.handleChange}
                              options={options}
                             />
                            </td>
                            <td>
                                <input></input>
                            </td>
                            </tr>
                            
                        </MDBTableBody>
                        </MDBTable>                    
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

export default Movement