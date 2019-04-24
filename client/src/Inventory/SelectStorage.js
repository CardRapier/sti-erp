import React, { Component } from 'react'
import Select from 'react-select';
import { MDBBtn } from 'mdbreact';
import { connect } from 'react-redux'
import { getStorages } from '../actions/storageActions'
import PropTypes from 'prop-types'

class SelectStorage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedStorage: null
        }
    }

    static propTypes = {
        getStorages: PropTypes.func.isRequired,
        storage: PropTypes.object.isRequired
    }

    componentWillMount() {
        this.props.getStorages()
    }


    handleChangeStorage = (selectedStorage) => {
        this.setState({ selectedStorage });
        localStorage.setItem('storage', selectedStorage._id)
    }

    render() {
        const { storages } = this.props.storage
        for (var i in storages){
            storages[i]['label'] =  storages[i]['name'] + " - " +storages[i]['direction']
            storages[i]['value'] =  storages[i]['name'] + " - " + storages[i]['direction']
        }
        
        return (
            <div>
                <Select
                    value={this.state.selectedStorage}
                    onChange={this.handleChangeStorage}
                    options={storages}
                />

                {this.props.buttonName !== "" ? <MDBBtn name="List" onClick={this.props.handleAppChange} color="indigo">{this.props.buttonName}</MDBBtn> : ""}
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    storage: state.storage
}) 

export default connect(mapStateToProps, { getStorages })(SelectStorage)