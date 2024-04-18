import React, { Component } from "react";

class EventBind extends Component{
    constructor(){
        super()
        this.state = {
            message : 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message: 'GoodBye!'
        })

    }
    render() {
        return (
            <div>
                {/* <button onClick={ ()=> this.clickHandler()}> Click </button> */}
                {/* <button onClick={this.clickHandler.bind(this)}> Click </button> */}
                <button onClick={this.clickHandler}> Click </button>
                <div>{this.state.message}</div>
            </div>
        )
    }
}

export default EventBind 