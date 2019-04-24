import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStoragesProducts } from '../actions/storageActions'
import { MDBDataTable } from 'mdbreact'
import PropTypes from 'prop-types'
 
class ListStorage extends Component {
    constructor() {
        super()
    }

    static propTypes = {
        getStoragesProducts: PropTypes.func.isRequired,
        storage: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getStoragesProducts()
        console.log(this.props)
    }

    render() {
        const { storages } = this.props.storage
        console.log(storages[0]['products'])
        for(var i in storages)
        {
            delete storages[i]['products']
            delete storages[i]['quantities']
            delete storages[i]['users']
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
                  }
            ], rows: storages
        }

        return (
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
    storage: state.storage
}) 

export default connect(mapStateToProps, { getStoragesProducts })(ListStorage)