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
            productMostrar: {}
        }
        this.PreparateData = this.PreparateData.bind(this)
    }
    static propTypes = {
        getProducts: PropTypes.func.isRequired,
        product: PropTypes.object.isRequired
    }
    componentDidMount() {
        this.props.getProducts()
        //this.PreparateData(products)
        //console.log(this.state.productMostrar + "Producto Mostrar")
    }

    PreparateData(products) {
        /**
        for (var i in products){
            //products[i]['actions'] = '<div><MDBContainer><MDBRow><ModalModify id={m[i]["_id"]}/> <MDBBtn color="indigo" size="sm" id={m[i]["_id"]}><MDBIcon icon="trash" /></MDBBtn></MDBRow></MDBContainer></div>'
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

        this.setState({
            productMostrar: data
        })*/
    }

    render () {
        const { products } = this.props.product
        for (var i in products){
            delete products[i]['_id']
            delete products[i]['__v']
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
                  }/**,
                  {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                  }  */
            ],
            rows: products
            
        }
        return(
            <div>
            <MDBDataTable
                striped
                bordered
                hover 
                small
                fixed
                data={data}
            />
            </div>
        )
    }
}



const mapStateToProps = state => ({
    product: state.product
}) 

export default connect(mapStateToProps, { getProducts })(ListProduct)
//export default ListProduct