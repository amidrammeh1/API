import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AxiosPokemon = () => {

  const [pokemon, setPokemon] = useState([]);

  const handleChangeGetPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response=> {setPokemon(response.data.results)})
    .catch(err => console.log(err));
  
  }




  return (
    <div>
      <button type ="submit" onClick={handleChangeGetPokemon}>Show Pokemon!</button>
      <ul>
        {
          pokemon.map((element, i) => {
            return <li key ={i}> {element.name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default AxiosPokemon