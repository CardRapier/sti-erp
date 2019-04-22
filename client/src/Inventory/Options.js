import React from 'react'
import { MDBBtn, MDBRow, MDBCol, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

function SelectPage() {
    return(
      <div>
        <select className="browser-default custom-select">
          <option>Escoja la Bodega</option>
          <option value="1">Bodega 1</option>
        </select>
          <MDBBtn color="indigo">Cambiar Bodega</MDBBtn>
      </div>
    )
}

function DropdownPage (props) {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="indigo">
        {props.name}
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem onClick={props.handleAppChange} name={props.opciones.first}>{props.opciones.first}</MDBDropdownItem>
        <MDBDropdownItem onClick={props.handleAppChange} name={props.opciones.second}>{props.opciones.second}</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  )
}


function Options(props) {
    return(
        <div>
              <br />
                <MDBRow>
                    <MDBCol><SelectPage /></MDBCol>
                    <DropdownPage name="Suministros" opciones={{ first:"Agregar", second:"Lista"}} handleAppChange={props.handleAppChange}/>
                    <DropdownPage name="Registrar Movimientos" opciones={{ first:"Movimiento", second:"Translado"}} handleAppChange={props.handleAppChange}/>
                </MDBRow>
        </div>
    )
}

export default Options