import React from 'react'


const Styles = props => {
  const styles = {
    color: props.color,
    background: props.background
  }
  return (
    <div>
      <h1 style={styles}> The {isNaN(props.id) ? "word" : "number"} is {props.id}</h1>
    </div>
  )
}

export default Styles