import React, {useState, useEffect} from 'react'


const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const handleChangeGetPokemon = () => {

      fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => response.json())
      .then(response => {
        setPokemon(response.results)
      })
  
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

export default Pokemon