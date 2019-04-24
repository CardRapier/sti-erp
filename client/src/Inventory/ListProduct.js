import React, { Component } from 'react'
import { MDBDataTable, MDBBtn, MDBRow, MDBContainer, MDBIcon } from 'mdbreact'
import ModalModify from './ModalModify'
import { connect } from 'react-redux'
import { getProducts } from '../actions/productActions'
import PropTypes from 'prop-types'

class ListProduct extends Component {
    constructor() {
        super()
    }

    static propTypes = {
        getProducts: PropTypes.func.isRequired,
        product: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getProducts()
    }

    render () {
        const { products } = this.props.product
        for (var i in products){
            products[i]['actions'] = <div><MDBContainer><MDBRow><ModalModify id={products[i]["_id"]}/> <MDBBtn color="indigo" size="sm" id={products[i]["_id"]}><MDBIcon icon="trash" /></MDBBtn></MDBRow></MDBContainer></div>
            delete products[i]['_id']
        }

        const data = {
            columns: [
                  {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                  },
                  {
                    label: 'Precio',
                    field: 'price',
                    sort: 'asc'
                  },
                  {
                    label: 'Tipo',
                    field: 'type',
                    sort: 'asc'
                  },
                  {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                  } 
            ],

            rows: products
        }

        return(
            <MDBDataTable
                striped
                bordered
                hover 
                small
                fixed
                data={data}
            />    
        )
    }
}

const mapStateToProps = state => ({
    product: state.product
}) 

export default connect(mapStateToProps, { getProducts })(ListProduct)