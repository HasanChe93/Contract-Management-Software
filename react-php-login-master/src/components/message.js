import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: "Welcome test!"
        }

        }
    changeMessage(){
      this.setState({
        message: 'thank you'
      })
    }
  render() {
    return (
      <div><h1>{this.state.message}</h1>
      <button onClick={()=>this.changeMessage()}> Subscribe</button>
      
      </div>
    )
  }
}