import React from 'react'
import { MDBDataTable } from 'mdbreact'
import data from './data-example.js'

function List() {
    return(
        <div>
        <MDBDataTable
            striped
            bordered
            hover 
            small
            data={data}
        />
        </div>
    )
}

export default List