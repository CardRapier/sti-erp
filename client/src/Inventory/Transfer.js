import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Select from 'react-select';

const optionsStorage = [
    { value: 'bodega1', label: 'Bodega 1' },
    { value: 'bodega2', label: 'Bodega 2' },
    { value: 'bodega3', label: 'Bodega 3' }
  ];

  const options = [
    { value: 'chocolate', label: 'chocolate' },
    { value: 'strawberry', label: 'strawberry' },
    { value: 'vanilla', label: 'vanilla' }
  ];


class Transfer extends Component {
    state = {
        selectedStorage: null,
        selectedOption: null
      }

      handleChangeStorage = (selectedStorage) => {
        this.setState({ selectedStorage });
      }

      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
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
                        <p className="h4 text-center py-4">Translado</p>
                        <label
                          htmlFor="defaultFormCardNameEx"
                          className="grey-text font-weight-light"
                        >
                          Bodega
                        </label>
                        <Select
                              value={this.state.selectedStorage}
                              onChange={this.handleChangeStorage}
                              options={optionsStorage}
                          />
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

export default Transfer