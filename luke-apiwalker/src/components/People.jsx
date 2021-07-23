import React, {useState, useEffect, useDebugValue} from 'react';
import {Link, navigate } from "@reach/router";
import axios from 'axios';


const People = () => {
  const [people, setPeople] = useState([]);
  const [home, setHome] = useState({name: ""})
}

useEffect(() => {
  axios.get('https://swapi.dev/api/people/' + id + '/')
  .then(response => {setPeople(response.data)})
  .catch(()=> navigate('/error'))

}, [id], 2500)