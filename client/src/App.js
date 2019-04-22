import React, { Component } from 'react'
import Inventory from './Inventory/Inventory'
import Navbar from './NavBar'
import Production from "./Production/Production"
import Login from "./Login"
import Start from './Start'

import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  constructor (props){
    super(props)
    this.state={
      app: !localStorage.getItem('user') ? <Login handleAppChange={this.handleAppChange} name='Start'/> : <Start />
    }
  }

  handleAppChange = (name) => {
    if(name==='Start') this.setState({app: <Start />})
    else if(name==="Production")this.setState({app: <Production />})
    else if(name==="Inventory")this.setState({app: <Inventory />})
    else if(name==="Login" && !localStorage.getItem('user')) this.setState({app: <Login handleAppChange={this.handleAppChange} name='Start' />})
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          {localStorage.getItem('user') ? <Navbar handleAppChange={this.handleAppChange}/> : ''}
          {this.state.app}
        </div>
      </Provider>
          
      
    );
  }
}

export default App;
