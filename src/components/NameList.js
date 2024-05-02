import React, { Component } from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList =  names.map(name => <h2>{name}</h2>)
  
    return (
      <div>
        {
        // names.map(name => <h2>{name}</h2>)
        nameList
        }
      </div>
    )
  }

export default NameList
