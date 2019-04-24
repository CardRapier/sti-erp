import React from 'react'
import { MDBRow, MDBCol, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import SelectStorage from './SelectStorage';

function SelectPage(props) {
    return(
          <SelectStorage handleAppChange={props.handleAppChange} buttonName="Cambiar Bodega"/>
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
                    <MDBCol><SelectPage handleAppChange={props.handleAppChange} /></MDBCol>
                    <DropdownPage name="Suministros" opciones={{ first:"Agregar", second:"Lista"}} handleAppChange={props.handleAppChange}/>
                    <DropdownPage name="Registrar Movimientos" opciones={{ first:"Movimiento", second:"Translado"}} handleAppChange={props.handleAppChange}/>
                </MDBRow>
        </div>
    )
}

export default Options