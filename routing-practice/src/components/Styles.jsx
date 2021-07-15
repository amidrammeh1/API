import React from 'react'


const Styles = props => {
  const styles = {
    color: props.color,
    background: props.background
  }
  return (
    <div>
      <h1 style={styles}> The {isNaN(props.param) ? "word" : "number"} is {props.param}</h1>
    </div>
  )
}

export default Styles