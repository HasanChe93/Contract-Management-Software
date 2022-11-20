import React, { Component } from 'react'

export default class Alert extends Component {
    constructor(){
        super()
        this.state ={
            alert : "Hello, This is Alert for Class"
        }
        
    }
changeAlert(){
    this.setState({
        alert:"changed!"
    }

    )
}
  render() {
    return (
      <div>
        <h1 style={{color:'Blue'}}> {this.state.alert}</h1>
        <button onClick={()=>this.changeAlert()}>Click Me!!</button>
      </div>
    )
  }
}
