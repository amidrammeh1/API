import React from 'react'

const Number = props => {
  return (
    <div>
      <h1> <h1>The {isNaN(props.param) ? "word" : "number"} is: {props.param}</h1> </h1>
    </div>
  )
}

export default Number