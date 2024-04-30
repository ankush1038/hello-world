import React, { Component } from 'react'

export class UserGreetings extends Component {

      constructor(props) {
        super(props)
      
        this.state = {
           isLoggedin: true
        }
      }
      

  render() {

    // Short Circuit Method

    return this.state.isLoggedin && <div>Welcome Ankush</div>


    // Ternary Operator
    // return(
    //   this.state.isLoggedin ?(
    //   <div>Welcome Ankush</div>) : (

    //   <div>Welcome Guest</div>
    //   )
    // )
    
    // let message
    // if(this.state.isLoggedin){
    //   message = <div>Welcome Ankush</div>
    // } else{
    //   message = <div>Welcome Guest</div>
    // }
    // return message
    
    
    // if(this.state.isLoggedin){
    //   return(
    //     <div> Welcome Ankush </div>
    //   )
    // } else{
    //   return(
    //     <div> Welcome Guest</div>
    //   )
    // }
    

    // return (
    //   <div>
    //    <div> Welcome Ankush</div>
    //    <div> Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreetings
