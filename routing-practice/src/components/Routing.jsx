import React from 'react'
import { Router } from '@reach/router'
import Home from './Home'
import Number from './Number'
import Styles from './Styles'

const Routing = () => {
return (
  <div>
    <Router>
      <Home path= "/home" />
      <Number path= "/:id" />
      <Styles path="/:id/:color/:background"/>

    </Router>
  </div>
)
}

export default Routing