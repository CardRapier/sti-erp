import React, { Component } from 'react'
import { MDBDataTable, MDBBtn, MDBRow, MDBContainer, MDBIcon } from 'mdbreact'
import ModalModify from './ModalModify'
import { connect } from 'react-redux'
import { getProducts } from '../actions/productActions'
import PropTypes from 'prop-types'

class ListProduct extends Component {
    constructor() {
        super()
        this.state = {
            product: {}
        }
    }

    componentWillMount() {
        this.props.getProducts()
        var { products } = this.props.product
        this.PreparateData(products)
    }

    PreparateData(products) {
        for (var i in products) {
            products[i]['actions'] = <div><MDBContainer><MDBRow><ModalModify id={products[i]['_id']}/> <MDBBtn color="indigo" size="sm" id={products[i]['_id']}><MDBIcon icon="trash" /></MDBBtn></MDBRow></MDBContainer></div>

            delete products[i]['_id']
            delete products[i]['__v']
        }

        let data = {
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

        this.setState(() => ({
            product: data
        }))
    }

    render () {
        return(
            <div>
            <MDBDataTable
                striped
                bordered
                hover 
                small
                fixed
                data={this.state.product}
            />
            </div>
        )
    }
}

ListProduct.propTypes = {
    getProducts: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    product: state.product
}) 

export default connect(mapStateToProps, { getProducts })(ListProduct)
//export default ListProduct